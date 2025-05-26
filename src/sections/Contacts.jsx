

export const Contacts = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="section-title gradient-text">Get in touch with me</h1>
      {/* <p className="section-desc"></p> */}
      <div class="flex flex-col items-center bg-linear-to-br from-purple-500 to-grayish-white p-5 m-5 mx-auto rounded-lg">
        <h2 class="text-grayish-white font-bold text-2xl">Get in touch</h2>
        <form action="https://example.com/submit" class="">
          <label for="name">Name</label>
          <div class="input-wrapper">
            <input id="name" type="text" placeholder="Chan Tai Man"/>
          </div>
          <br/>
          <label for="email">Email</label>
          <div class="input-wrapper">
            <input id="email" type="email" placeholder="1234@example.com"/>
          </div>
          <br/>
          <label for="msg">Message</label>
          <div class="input-wrapper">
            <textarea id="msg" name="msg" rows="4" cols="50" placeholder="Write your message here"></textarea>
          </div>
          <br/>
          <button type="submit" class="glowing-btn block mx-auto">
            <div class="inner">Submit message</div>
          </button>
        </form>
      </div>
    </div>
  )
}