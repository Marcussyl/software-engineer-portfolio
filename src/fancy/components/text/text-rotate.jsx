import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils"

// handy function to split text into characters with support for unicode and emojis
const splitIntoCharacters = text => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  // Fallback for browsers that don't support Intl.Segmenter
  return Array.from(text);
};

const TextRotate = forwardRef((
  {
    texts,
    as = "p",
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...props
  },
  ref
) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Splitting the text into animation segments
  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex]
    if (splitBy === "characters") {
      const text = currentText.split(" ")
      return text.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== text.length - 1,
      }));
    }
    return splitBy === "words"
      ? currentText.split(" ")
      : splitBy === "lines"
        ? currentText.split("\n")
        : currentText.split(splitBy);
  }, [texts, currentTextIndex, splitBy])

  // Helper function to calculate stagger delay for each text segment
  const getStaggerDelay = useCallback((index, totalChars) => {
    const total = totalChars
    if (staggerFrom === "first") return index * staggerDuration
    if (staggerFrom === "last") return (total - 1 - index) * staggerDuration
    if (staggerFrom === "center") {
      const center = Math.floor(total / 2)
      return Math.abs(center - index) * staggerDuration;
    }
    if (staggerFrom === "random") {
      const randomIndex = Math.floor(Math.random() * total)
      return Math.abs(randomIndex - index) * staggerDuration;
    }
    return Math.abs(staggerFrom - index) * staggerDuration;
  }, [staggerFrom, staggerDuration])

  // Helper function to handle index changes and trigger callback
  const handleIndexChange = useCallback((newIndex) => {
    setCurrentTextIndex(newIndex)
    onNext?.(newIndex)
  }, [onNext])

  // Go to next text
  const next = useCallback(() => {
    const nextIndex =
      currentTextIndex === texts.length - 1
        ? loop
          ? 0
          : currentTextIndex
        : currentTextIndex + 1

    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex)
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange])

  // Go back to previous text
  const previous = useCallback(() => {
    const prevIndex =
      currentTextIndex === 0
        ? loop
          ? texts.length - 1
          : currentTextIndex
        : currentTextIndex - 1

    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex)
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange])

  // Jump to specific text by index
  const jumpTo = useCallback((index) => {
    const validIndex = Math.max(0, Math.min(index, texts.length - 1))
    if (validIndex !== currentTextIndex) {
      handleIndexChange(validIndex)
    }
  }, [texts.length, currentTextIndex, handleIndexChange])

  // Reset back to first text
  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0)
    }
  }, [currentTextIndex, handleIndexChange])

  // Get animation props for each text segment. If array is provided, states will be mapped to text segments cyclically.
  const getAnimationProps = useCallback((index) => {
    const getProp = (
      prop
    ) => {
      if (Array.isArray(prop)) {
        return prop[index % prop.length]
      }
      return prop
    }

    return {
      initial: getProp(initial),
      animate: getProp(animate),
      exit: getProp(exit),
    };
  }, [initial, animate, exit])

  // Expose all navigation functions via ref
  useImperativeHandle(ref, () => ({
    next,
    previous,
    jumpTo,
    reset,
  }), [next, previous, jumpTo, reset])

  // Auto-rotate text
  useEffect(() => {
    if (!auto) return
    const intervalId = setInterval(next, rotationInterval)
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto])

  // Custom motion component to render the text as a custom HTML tag provided via prop
  const MotionComponent = useMemo(() => motion.create(as ?? "p"), [as])

  return (
    <MotionComponent
      className={cn("flex flex-wrap whitespace-pre-wrap", mainClassName)}
      transition={transition}
      layout
      {...props}>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className={cn("flex flex-wrap", splitBy === "lines" && "flex-col w-full")}
          aria-hidden
          layout>
          {(splitBy === "characters"
            ? (elements)
            : (elements).map((el, i) => ({
                characters: [el],
                needsSpace: i !== elements.length - 1,
              }))
          ).map((wordObj, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0)

            return (
              <span key={wordIndex} className={cn("inline-flex", splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => {
                  const totalIndex = previousCharsCount + charIndex
                  const animationProps = getAnimationProps(totalIndex)
                  return (
                    <span key={totalIndex} className={cn(elementLevelClassName)}>
                      <motion.span
                        {...animationProps}
                        key={charIndex}
                        transition={{
                          ...transition,
                          delay: getStaggerDelay(
                            previousCharsCount + charIndex,
                            array.reduce((sum, word) => sum + word.characters.length, 0)
                          ),
                        }}
                        className={"inline-block"}>
                        {char}
                      </motion.span>
                    </span>
                  );
                })}
                {wordObj.needsSpace && (
                  <span className="whitespace-pre"> </span>
                )}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </MotionComponent>
  );
})

TextRotate.displayName = "TextRotate"

export default TextRotate