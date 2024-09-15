import BlogPostCard from "../../components/blogPostCard/BlogPostCard";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <BlogPostCard />
      <Loader />
    </Layout>
  );
}

export default Home;
