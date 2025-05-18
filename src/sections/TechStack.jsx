import { TechStackItem } from "../components/TechStackItem"

export const TechStackSection = () => {
  return (
    <div className="flex gap-3">
      <TechStackItem text={"JavaScript"} value={"90"}/>
    </div>
  )
}