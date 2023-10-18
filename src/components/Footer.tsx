export default function Footer() {
  return (
    <>
      <footer className="bottom-0 p-10 bg-gray-700 w-full">
        <nav className="justify-evenly flex flex-col sm:flex-row">
          <section className="flex-col mb-4">
            <div className="text-2xl font-semibold">Games</div>
            <ul>
              <li>Backrooms</li>
              <li>EduAlpha</li>
              <li>Shallow2D</li>
              <li>Chainsaw</li>
              <li>Ballin</li>
            </ul>
          </section>
          <section className="flex-col mb-4">
            <div className="text-2xl font-semibold">Blog</div>
            <ul>
              <li>Build MERN App</li>
              <li>Progressive Web App</li>
              <li>
                Create your own <br /> FOSS Studio
              </li>
              <li>What is callback in JS</li>
              <li>CSS Grid for Beginners</li>
            </ul>
          </section>
          <section className="flex-col mb-4">
            <div className="text-2xl font-semibold">Market Place</div>
            <ul>
              <li>3D Assets</li>
              <li>Plugins</li>
              <li>Stock Music</li>
              <li>Stock Images</li>
              <li>Stock Videos</li>
            </ul>
          </section>
          <section className="mb-4">
            <div className="text-2xl font-semibold">Learn</div>
            <ul>
              <li>Data Structure & Algorithms</li>
              <li>Machine Learning</li>
              <li>Blockchain Development</li>
              <li>Mobile Development</li>
              <li>Web Development</li>
            </ul>
          </section>
          <section className="mb-4">
            <div className="text-2xl font-semibold">Projects</div>
            <ul>
              <li>Iconology</li>
              <li>WeWidgets</li>
              <li>ProductivePro</li>
              <li></li>
              <li></li>
            </ul>
          </section>

          <section>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold">Follow Us:</div>
              <div className="flex flex-row justify-evenly">
                <div className="w-10">
                  <a href="https://www.facebook.com/parallelintersectpi">
                    <img
                      src="https://www.svgrepo.com/show/521654/facebook.svg"
                      alt="fb"
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="https://www.instagram.com/parallelintersectpi/">
                    <img
                      src="https://www.svgrepo.com/show/521711/instagram.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="https://www.instagram.com/parallelintersectpi/">
                    <img
                      src="https://www.svgrepo.com/show/521725/linkedin.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="https://twitter.com/PIcompanyX">
                    <img
                      src="https://www.svgrepo.com/show/521900/twitter.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="https://www.youtube.com/@ParallelIntersectPI">
                    <img
                      src="https://www.svgrepo.com/show/521936/youtube.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="https://github.com/ParallelIntersect/">
                    <img
                      src="https://www.svgrepo.com/show/521688/github.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-10">
                  <a href="mailto:parallelintersectpi@gmail.com">
                    <img
                      src="https://www.svgrepo.com/show/521736/mail.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </nav>
        <hr className="h-px m-4 border-black w-full" />
        <main className=" flex justify-evenly items-center flex-col sm:flex-row">
          <div className="flex flex-row items-center m-2">
            <img className="h-10 w-10" aria-hidden="true" src="/logo.svg" />
            <div className="ml-2 font-bold text-2xl">Parallel Intersect</div>
          </div>
          <div className="text-center">
            Copyright © 2021-2023 Parallel Intersect, All rights reserved
          </div>
        </main>
      </footer>
    </>
  );
}
