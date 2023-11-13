function Accordion({ title = "", data }) {
  return (
    <div className="max-w-4xl mb-6 mx-auto overflow-hidden space-y-2">
      {/* SubTitle */}
      {title && (
        <h2 className="text-3xl font-title capitalize sm:text-2xl">{title}</h2>
      )}
      {/* Tab 1 */}
      {data.map((el, i) => (
        <AccordionChild
          key={i}
          index={i}
          question={data[i].question}
          answer={data[i].answer}
        />
      ))}
    </div>
  );
}

function AccordionChild({ index, question, answer }) {
  return (
    <div className="py-1 outline-none group" tabIndex={index + 1}>
      {/* Tab Flex Container */}
      <div className="flex items-center justify-between p-2 px-6 bg-bodyBackColor group-focus:bg-secondaryYellow rounded-xl transition duration-300 cursor-pointer group ease hover:bg-secondaryYellow">
        {/* Tab Title */}
        <div className="text-base sm:text-sm">{question}</div>
        {/* Icon Arrow SVG */}
        <div className="transition duration-300 ease group-focus:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="m7 10l5 5m0 0l5-5"
            />
          </svg>
        </div>
      </div>
      {/* Tab Inner Content */}
      <div className="overflow-hidden transition duration-300 group-focus:max-h-screen max-h-0 ease">
        <p className="py-2 px-6 text-justify transition duration-300 text-sm italic sm:text-xs">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
