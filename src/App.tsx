import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";

export default function App() {
  return (
    <div className="min-h-screen animated-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="particles"></div>
      <div className="line"></div>

      {/* Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <ProfilePage />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
