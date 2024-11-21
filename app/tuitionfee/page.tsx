"use client";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const TuitionFee = () => {
  return (
    <div
      className="relative bg-gray-100 text-gray-900"
      id="tuition-fees-section"
    >
      {/* Page Header */}
      <div
        className="z-0 relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Fade direction="down" delay={200} triggerOnce>
            <h1 className="text-4xl lg:text-5xl font-bold">Tuition Fees</h1>
            <p className="mt-4 text-lg lg:text-xl font-light">
              Taj International School provides a clear, flexible fee structure
              to accommodate families&apos; needs.
            </p>
          </Fade>
        </div>
      </div>

      {/* Tuition Fees Content */}
      <div className="py-16 px-6 lg:px-0">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Registration Fee */}
          <div className="space-y-6 text-center lg:text-left">
            <Fade direction="up" delay={300} triggerOnce>
              <h2 className="text-3xl font-semibold text-gray-800">
                Registration Fee
              </h2>
              <p className="text-lg font-light">
                A one-time,{" "}
                <strong className="font-bold">non-refundable</strong>{" "}
                registration fee of <strong className="font-bold">$50</strong>{" "}
                is required upon enrollment for new students.
              </p>
            </Fade>
          </div>

          {/* Monthly Payment Plan */}
          <div className="space-y-6 text-center lg:text-left">
            <Fade direction="up" delay={300} triggerOnce>
              <h2 className="text-3xl font-semibold text-gray-800">
                Monthly Payment Plan
              </h2>
              <p className="text-lg font-light">
                For families opting to pay on a monthly basis, the fees are as
                follows:
              </p>
              <table className="text-left mx-auto lg:mx-0 mt-4">
                <thead>
                  <tr>
                    <th className="pr-4 text-gray-700">Fee Type</th>
                    <th className="pr-4 text-gray-700">Amount (per month)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition </td>
                    <td>$75</td>
                  </tr>
                  <tr>
                    <td>
                      Transportation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    </td>
                    <td>$20</td>
                  </tr>

                  <tr>
                    <td>July fees </td>
                    <td>$7</td>
                  </tr>

                  <tr>
                    <td className="font-semibold">Total</td>
                    <td className="font-semibold">$102</td>
                  </tr>
                </tbody>
              </table>
            </Fade>
          </div>

          {/* Quarterly Payment Plan */}
          <div className="space-y-6 text-center lg:text-left">
            <Fade direction="up" delay={300} triggerOnce>
              <h2 className="text-3xl font-semibold text-gray-800">
                Quarterly Payment Plan
              </h2>
              <p className="text-lg font-light">
                Our quarterly payment plan offers a discounted rate for families
                who prefer to pay in advance, with fees due in{" "}
                <strong className="font-bold">August</strong>,{" "}
                <strong className="font-bold">November</strong>,{" "}
                <strong className="font-bold">February</strong>, and in{" "}
                <strong className="font-bold">May</strong>.
              </p>
              <table className="text-left mx-auto  lg:mx-0 mt-4">
                <thead>
                  <tr>
                    <th className="pr-4 text-gray-700">Fee Type</th>
                    <th className="pr-4 text-gray-700">Amount (per quarter)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition </td>
                    <td>$210</td>
                  </tr>
                  <tr>
                    <td>Transportation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>$55</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Total</td>
                    <td className="font-semibold">$265</td>
                  </tr>
                </tbody>
              </table>
            </Fade>
          </div>

          {/* Additional Information Section */}
          <div className="my-12 text-center">
            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-gray-800 mb-10">
                Additional Fees
              </h3>
              <p className="text-lg font-light mb-4">
                Certain activities or events may have associated fees, depending
                on costs. Families will be notified in advance of any such fees.
              </p>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <h3 className="text-3xl font-semibold text-gray-800 my-10">
                Payment Methods
              </h3>

              <p className="text-lg font-light mb-4">
                We offer several convenient payment options to accommodate all
                families:
              </p>
              <ul className="text-lg font-light list-disc list-inside mb-4">
                <li>Mobile Money Transfer</li>
                <li>Cash Payment at the school office</li>
                <li>Bank Transfer</li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="text-xl font-medium rounded-full text-white py-4 px-8 bg-pink-500 hover:bg-pink-600"
                >
                  Contact us
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionFee;
