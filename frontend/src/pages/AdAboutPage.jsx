import AdNavBar from "../components/AdNavBar";

function AdAboutPage({ onLogout, user }) {
  return (
    <>
      <div className="w-full min-h-screen pt-15 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-8 px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-xl lg:text-2xl text-center xl:text-2xl">
              About ArtDumpster*
            </h1>
            <p className="text-xs font-light lg:text-base xl:text-lg">
              A place to dump art.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-lg lg:text-2xl xl:text-2xl">
              Why it exists?
            </h1>
            <p className="text-xs font-light text-center lg:text-base xl:text-lg">
              ArtDumpster was created as a simple space where artists can keep,
              organize, and showcase the work they create.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-lg lg:text-2xl xl:text-2xl">
              What you can do?
            </h1>
            <p className="text-xs font-light text-center lg:text-base xl:text-lg">
              Upload your artwork and keep your creations in one place.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-lg lg:text-2xl xl:text-2xl">
              Built with.
            </h1>
            <p className="text-xs font-light text-center lg:text-base xl:text-lg">
              Built with modern web technologies to bring the ArtDumpster
              experience to life.
            </p>
            <br />
            <p className="text-xs font-light text-center w-full lg:text-base xl:text-lg">
              React · Node.js · Express.js · PostgreSQL
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-lg lg:text-2xl xl:text-2xl">
              Behind the Dumpster.
            </h1>
            <p className="text-xs font-light text-center lg:text-base xl:text-lg">
              What started as an idea for an online art dump became a full-stack
              application built from the ground up.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary font-bold text-lg lg:text-2xl xl:text-2xl">
              Crafted by Jian Lee Ramos
            </h1>
            <p className="text-xs font-light text-center lg:text-base xl:text-lg">
              ArtDumpster was designed and developed by Leezy, combining a love
              for art, design, and web development into one project..
            </p>
          </div>
        </div>
      </div>

      <AdNavBar onLogout={onLogout} user={user} />
    </>
  );
}

export default AdAboutPage;
