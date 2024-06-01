import imageLinks from '@/imageLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center text-white  h-[44vh] items-center gap-4">
        <div className="flex items-center justify-center gap-2 text-5xl font-bold ">
          Buy Me a Chai{' '}
          <span>
            <Image
              className="mb-7"
              width={70}
              height={70} // Adding height for the image
              src={imageLinks.hotTea}
              alt="Hot Tea"
              layout="fixed"
            />
          </span>
        </div>
        <p>A crowfunding platform for creators. Get funded by your fans and followers.</p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="h-1 bg-white opacity-10"></div>

      <div className="container py-20 mx-auto text-white">
        <h2 className="mb-10 text-3xl font-bold text-center">Your Fans can buy you a Chai</h2>
        <div className="flex justify-around gap-5">
          <div className="flex flex-col items-center space-y-3 item">
            <Image
              className="text-black rounded-full bg-slate-400"
              src={imageLinks.fundYourself}
              alt="Fund Yourself"
              width={60}
              height={60}
              priority={true}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="flex flex-col items-center space-y-3 item">
            <Image
              className="text-black rounded-full bg-slate-400"
              src={imageLinks.coin}
              alt="Fund Yourself"
              width={60}
              height={60}
              priority={true}
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="flex flex-col items-center space-y-3 item ">
            <Image
              className="text-black rounded-full bg-slate-400"
              src={imageLinks.group}
              alt="Fund Yourself"
              width={60}
              height={60}
              priority={true}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-white opacity-10"></div>

      <div className="container flex flex-col items-center justify-center py-20 mx-auto text-white">
        <h2 className="mb-10 text-3xl font-bold text-center">Learn more about us</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QF4DmqqeTbI?si=SZgMSC3faZTiki1a"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg"
        ></iframe>
      </div>
    </>
  );
}
