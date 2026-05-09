import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfilePage from "./components/ProfilePage";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        animated-bg
        relative
        overflow-hidden
        text-white
      "
    >
      {/* Background Effects */}
      <div className="particles"></div>
      <div className="line"></div>

      {/* Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <main
          className="
            flex-grow
            px-4
            md:px-8
            py-10
          "
        >
          <div className="max-w-7xl mx-auto space-y-24">
            {/* Profile Cards */}
            <ProfilePage />

            {/* Skills Section */}
            <Skills />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
