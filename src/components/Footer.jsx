import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
  } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <section className="bg-[#000] text-[#f6f6f6]">
        <div className="flex flex-col items-center justify-between gap-8 py-10 m-auto md:p-10 md:flex-row w-90px">
          <div className="w-full md:w-[30%] flex flex-col gap-8">
            
            <div className="text-[#f6f6f6]">
              Somos una consultora integral, brindamos soluciones completas de
              gestión de negocios.
            </div>
            <div className="flex space-x-4">
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mt-4 text-3xl" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mt-4 text-3xl" />
                </a>
              </div>
              <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mt-4 text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] flex flex-col gap-8">
            <div>
              <a
                href="mailto:example@example.com"
                className="flex items-center gap-2"
              >
                <FaEnvelope className="text-xl" />
                <span>autocoring@gmail.com</span>
              </a>
            </div>
            <div>
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <FaPhone className="text-xl" />
                <span> 3573-445138</span>
              </a>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Your+Address"
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="text-xl" />
                <span>Río Segundo, Córdoba.</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54343.37685950742!2d-63.97845418914892!3d-31.64860363515374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432cafff1f1cec1%3A0xf370c1a41d5322ac!2zUsOtbyBTZWd1bmRvLCBDw7NyZG9iYQ!5e0!3m2!1ses!2sar!4v1722305973951!5m2!1ses!2sar"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    
    </>
  )
}
