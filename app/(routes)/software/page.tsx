import PageStripe from "@/app/_components/_common/PageStripe";
import Image from "next/image";

const Page = () => {
  return (
    <div className="pb-5">
      <PageStripe title="Software Solutions" />

      <div className="container pt-4">
        <div className="row mb-5">
          <div className="d-none d-md-block col-md-4">
            <div className="home_AboutImage" data-aos="fade-right">
              <Image src="/images/placeholder.png" fill alt="" />
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="home_aboutCaptions">
              <div>
                <h2
                  className="textSecondary fs-1 fw-bolder"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  Royal Vision
                </h2>
              </div>

              <div className="d-flex flex-column gap-3 fw-light">
                <p data-aos="fade-left" data-aos-delay={200}>
                  Royal Defense is proud to present Royal Vision, a cutting-edge
                  software solution capable of reading Egyptian license plates
                  with utmost precision and efficiency.
                </p>
                <p data-aos="fade-left" data-aos-delay={250}>
                  With Royal Vision, businesses and organizations across various
                  industries.
                </p>
                <p data-aos="fade-left" data-aos-delay={300}>
                  Our state-of-the-art software leverages advanced technologies
                  like computer vision, machine learning, and optical character
                  recognition (OCR) to accurately detect and extract critical
                  information from Egyptian license plates. Whether it's for
                  parking management, traffic control, law enforcement, or any
                  other application requiring license plate recognition, Royal
                  Vision is your ultimate solution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8">
            <div className="home_aboutCaptions">
              <div>
                <h2
                  className="textSecondary fs-1 fw-bolder"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  RPM
                </h2>
              </div>

              <div className="d-flex flex-column gap-3 fw-light">
                <p data-aos="fade-left" data-aos-delay={200}>
                  Welcome to the future of parking management – where efficiency
                  meets innovation, and convenience intertwines with
                  cutting-edge technology.
                </p>
                <p data-aos="fade-left" data-aos-delay={250}>
                  Say hello to RPM, your gateway to a smarter, more streamlined
                  parking experience. Whether you're a parking facility owner
                  aiming to boost revenue or a driver tired of the endless
                  search for the perfect spot, RPM is here to transform the way
                  we think about parking.
                </p>
                <p data-aos="fade-left" data-aos-delay={300}>
                  Fasten your seatbelts as we take you on a ride through the
                  world of intelligent space allocation, user-friendly
                  interfaces, and a parking revolution like never before.
                </p>
              </div>
            </div>
          </div>

          <div className="d-none d-md-block col-md-4">
            <div className="home_AboutImage" data-aos="fade-right">
              <Image src="/images/placeholder.png" fill alt="" />
            </div>
          </div>
        </div>

        <div>
          <p className="fw-light mb-2"></p>
          <p className="fw-light mb-2"></p>
          <p className="fw-light mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default Page;
