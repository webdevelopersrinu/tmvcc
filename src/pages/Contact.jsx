function Contact() {
  return (
    <div className="text-black px-4 ">
      <h1 className="text-center text-3xl font-bold py-3 ">Contact</h1>
      <div className="flex items-center flex-col justify-center">
        <main>
          <div>
            <p className="text-2xl py-3 font-bold ">Where you can find us</p>
            <ul className="flex items-start gap-2 text-xl font-semibold  flex-col py-2">
              <li>TMVCC</li>
              <li>Finny Bank Rd </li>
              <li>Sale </li>
              <li>M33 6LR</li>
            </ul>

            <section>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9507.928180934334!2d-2.3297882!3d53.4330293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bac38b073b31d%3A0x8ead6a1f01ec52f0!2sTrafford%20MV%20RFCC!5e0!3m2!1sen!2sin!4v1732712933045!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: "1px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </div>
        </main>
        <div className="flex items-center gap-4 my-4">
          <div className="text-2xl py-3 text-white inline-block my-3 px-2 rounded-xl cursor-pointer bg-primary-color">
            <a href="https://forms.gle/fLcAD9wHNrcEG4g26" target="_blank">
              Google Form
            </a>
          </div>
          <div className="text-2xl py-3 text-white inline-block my-3 px-2 rounded-xl cursor-pointer bg-primary-color ">
            <a href="https://pay.gocardless.com/AL0015FYG90G8T" target="_blank">
              Payment link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
