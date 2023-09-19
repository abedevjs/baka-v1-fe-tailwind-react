import { team } from "../../public/docs/team";

function Team({ data }) {
  // console.log(team.map((el, i) => el.name));
  // const names = team.map((el, i) => el.name);
  return (
    <>
      {data.map((el, i) => (
        <TeamChild
          key={i}
          name={data[i].name}
          role={data[i].role}
          image={data[i].image}
          fb={data[i].fb}
          ig={data[i].ig}
          wa={data[i].wa}
        />
      ))}
    </>
  );
}

function TeamChild({ image, name, role, fb, ig, wa }) {
  return (
    <div className="flex flex-col">
      {/* Foto */}
      <div className="w-[140px] h-[140px] border-2 border-solid border-secondaryYellowTint rounded-[50%]">
        <img
          src={`images/${image}`}
          alt=""
          className="block w-full h h-full rounded-[50%] object-cover -translate-x-[15px] -translate-y-[15px]"
        />
      </div>
      {/* Identity Box */}
      <div className="flex flex-col px-2 justify-center w-40 h-20 -translate-y-[10px] bg-secondaryYellowTint rounded-lg">
        <span className="text-sm">{name}</span>
        <span className="font-thin text-xs">{role}</span>
        <div className="flex mt-2 space-x-1">
          <a
            href={`https://www.facebook.com/${fb}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto fill-inherit cursor-pointer hover:fill-[#4267B2] duration-300"
              viewBox="0 0 20 20"
            >
              <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z" />
            </svg>
          </a>
          <a
            href={`https://www.instagram.com/${ig}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto fill-inherit cursor-pointer hover:fill-[#E4405F] duration-300"
              viewBox="0 0 15 15"
            >
              <path d="M7.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z" />
              <path
                fillRule="evenodd"
                d="M4.5 0A4.5 4.5 0 0 0 0 4.5v6A4.5 4.5 0 0 0 4.5 15h6a4.5 4.5 0 0 0 4.5-4.5v-6A4.5 4.5 0 0 0 10.5 0h-6ZM4 7.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0ZM11 4h1V3h-1v1Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=${wa}&text=Hallo%20Tim%20Baka.`}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-auto fill-inherit cursor-pointer hover:fill-[#25D366] duration-300"
              viewBox="0 0 15 15"
            >
              <path d="M5 4.768a.5.5 0 0 1 .761.34l.14.836a.5.5 0 0 1-.216.499l-.501.334A4.501 4.501 0 0 1 5 5.5v-.732ZM9.5 10a4.5 4.5 0 0 1-1.277-.184l.334-.5a.5.5 0 0 1 .499-.217l.836.14a.5.5 0 0 1 .34.761H9.5Z" />
              <path
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1 1 3.253 6.182l-2.53 1.265a.5.5 0 0 1-.67-.67l1.265-2.53A7.467 7.467 0 0 1 0 7.5Zm4.23-3.42l.206-.138a1.5 1.5 0 0 1 2.311 1.001l.14.837a1.5 1.5 0 0 1-.648 1.495l-.658.438A4.522 4.522 0 0 0 7.286 9.42l.44-.658a1.5 1.5 0 0 1 1.494-.648l.837.14a1.5 1.5 0 0 1 1.001 2.311l-.138.207a.5.5 0 0 1-.42.229h-1A5.5 5.5 0 0 1 4 5.5v-1a.5.5 0 0 1 .23-.42Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Team;
