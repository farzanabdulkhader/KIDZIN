import MainHeader from "../shared/navigation/MainHeader";
import Footer from "../components/Footer";
import Button from "../shared/ui/Button";
import PageHeader from "../shared/ui/PageHeader";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <>
      <MainHeader />
      <PageHeader
        title="About Us"
        sub="Nurturing Curiosity, Growth, and Joyful Learning at KIDZIN"
        image="images/00.jpg"
      />
      <section className={styles.aboutUs}>
        <div className={styles.aboutContent}>
          <h1>We are the best place for your little buds to bloom</h1>
          <AboutContent />
          <Button to="/courses" style="redBtn">
            EXPLORE NOW
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;

const AboutContent = () => {
  return (
    <div className={styles.aboutBody}>
      <img
        src="gallery/img_4.jpg"
        alt="about-img"
        style={{ float: "right", paddingTop: "0", paddingRight: "0" }}
        className="img-filter"
      />
      <p>
        At KIDZIN, we take pride in our dedicated team of experienced educators.
        Our commitment is to provide a safe and inclusive environment where
        every child feels valued, supported, and encouraged to explore their
        natural curiosity. Recognizing the uniqueness of each child, we tailor
        our teaching methods to meet individual needs, nurturing social,
        emotional, cognitive, and physical development. Through our play-based
        curriculum, we aim to inspire a love for learning and help children
        acquire essential skills in a fun and engaging manner. Join us in this
        exciting journey of growth and discovery!
      </p>

      <h2>Our Mission</h2>
      <p>
        At Kidzin, our mission is simple: to offer a{" "}
        <strong>safe, supportive, and inclusive space</strong> where children
        can bloom. We believe that every child is unique, and we strive to honor
        that by providing a holistic approach to early childhood education. We
        focus on{" "}
        <strong>
          nurturing social, emotional, cognitive, and physical growth
        </strong>{" "}
        through a well-rounded, play-based curriculum designed to foster each
        child’s natural curiosity and love for learning.
      </p>

      <h2>Our Vision</h2>
      <p>
        We envision a world where every child has the opportunity to thrive. At
        Kidzin, we believe that the early years of a child’s life lay the
        foundation for their future success. By providing a supportive, fun, and
        engaging environment, we aim to equip children with not only academic
        knowledge but also the emotional and social skills needed to navigate
        the world confidently.
      </p>

      <h2>Our Core Values</h2>
      <p>
        <strong>Respect and Inclusion:</strong> We respect the individuality of
        each child and provide an inclusive environment where all children can
        thrive.
      </p>
      <p>
        <strong>Creativity and Curiosity:</strong> We foster a love for
        exploration and encourage creativity, believing that children learn best
        when they are inspired and curious.
      </p>
      <p>
        <strong>Collaboration and Community:</strong> We value the role of
        parents, teachers, and caregivers in a child’s life, promoting a
        collaborative approach to early education.
      </p>
      <p>
        <strong>Safety and Well-Being:</strong> Your child’s safety and
        well-being are at the forefront of everything we do. We ensure that
        children feel safe, supported, and comfortable while they are with us.
      </p>

      <img
        src="gallery/img_1.jpg"
        style={{ float: "left", paddingLeft: "0" }}
        className="img-filter"
      />
      <p>
        At <b>Kidzin</b>, we understand that the early years of a child&apos;s
        life are critical to their overall development. These years lay the
        foundation for who they will become, and we are honored to be part of
        this journey. Our philosophy is grounded in the belief that learning
        should be a joyful and exciting experience, where children feel
        empowered to explore, discover, and grow at their own pace. We view
        every moment as an opportunity for learning, whether it&apos;s in the
        classroom, on the playground, or during interactive activities that
        engage their curiosity.
        <br />
      </p>

      <p>
        Our team is passionate about creating a holistic educational experience.
        We emphasize not only academic growth but also emotional intelligence,
        social skills, and physical well-being. At <b>Kidzin</b>
        , we believe that success in education goes beyond numbers and letters.
        It&apos;s about nurturing the whole child — mind, body, and spirit. This
        is why we carefully design our curriculum to meet the developmental
        needs of each child, ensuring that they are not only well-prepared for
        the next phase of education but are also happy, confident, and
        well-rounded individuals.
        <br />
      </p>
      <p>
        We place a strong emphasis on creating a warm and inclusive community.
        Families are at the heart of everything we do, and we work closely with
        parents to foster a collaborative approach to early childhood education.
        We believe that children thrive when there is a strong partnership
        between home and school. Open communication, parent engagement, and
        regular updates on progress are central to our philosophy. By creating
        this bridge between school and family life, we ensure that every child
        receives consistent care, attention, and encouragement — both in the
        classroom and at home.
        <br />
      </p>
      <img
        src="gallery/img_19.jpg"
        style={{ float: "right", paddingRight: "0" }}
        className="img-filter"
      />
      <p>
        At <b>Kidzin</b>, we are also proud to be at the forefront of modern
        educational practices. We continually assess and refine our programs to
        incorporate the latest research in early childhood development, ensuring
        that our teaching methods and strategies are evidence-based and
        effective. By blending traditional learning techniques with modern
        pedagogical approaches, we are able to offer a dynamic and engaging
        educational experience that prepares children not only for school but
        also for life.
        <br />
      </p>

      <p>
        In addition to our core programs, we offer a range of extracurricular
        activities and enrichment opportunities designed to broaden your
        child&apos;s horizons. From music and art to physical education and
        language immersion, our goal is to expose children to a variety of
        interests and skills, helping them to discover their own unique
        passions. We believe that every child is different, and our diverse
        programs allow them to explore new avenues of learning in a safe and
        supportive environment.
        <br />
      </p>

      <p>
        One of the hallmarks of <b>Kidzin</b> is our commitment to inclusivity.
        We are dedicated to providing an environment where every child,
        regardless of background or ability, feels respected and valued. Our
        inclusive philosophy extends to every part of our preschool — from our
        teaching methods to the design of our classrooms and playgrounds. We
        take great care to ensure that all children, including those with
        special needs, receive the support they need to succeed. Our goal is to
        create a community where diversity is celebrated, and where every child
        feels that they belong.
        <br />
      </p>
      <p>
        Safety is another cornerstone of our program. We know that entrusting
        your child to someone else&apos;s care is a big decision, and we take
        that responsibility seriously. Our facilities are designed with child
        safety in mind, and we adhere to the highest standards of hygiene and
        supervision. All staff members are trained in first aid and emergency
        procedures, and our campus is regularly inspected to ensure it meets all
        safety regulations. You can rest assured that when your child is at
        <b>Kidzin</b>, they are in safe and capable hands.
        <br />
      </p>
      <img
        src="gallery/img_3.jpg"
        style={{ float: "left", paddingLeft: "0" }}
        className="img-filter"
      />
      <p>
        We also recognize that education is not a one-size-fits-all process.
        Every child learns differently, and our approach reflects this
        understanding. Our educators are trained to adapt their teaching to suit
        the individual needs of each student, providing a personalized learning
        experience that allows every child to succeed in their own way. Whether
        your child is a hands-on learner, a visual thinker, or someone who
        thrives through conversation and interaction, our teachers are dedicated
        to helping them reach their full potential.
        <br />
      </p>

      <p>
        In a world that is rapidly changing, it is our mission to prepare
        children for the challenges and opportunities of tomorrow. Through our
        innovative and child-centered approach, we strive to create a generation
        of learners who are not only academically prepared but are also
        resilient, compassionate, and creative thinkers. We aim to give every
        child the tools they need to navigate life with confidence and joy,
        knowing that they are capable of achieving great things.
        <br />
      </p>

      <p>
        At the heart of everything we do at <b>Kidzin</b> is our belief in the
        power of play. Play is a child&apos;s natural way of learning, and we
        integrate it into every aspect of our curriculum. Through play, children
        develop critical thinking skills, learn to solve problems, and build
        strong relationships with their peers. Play encourages creativity,
        fosters independence, and is a vital component of healthy emotional and
        social development. By creating a learning environment where play is
        encouraged and valued, we help children grow into confident and
        well-rounded individuals.
        <br />
      </p>
      <p>
        Thank you for considering <b>Kidzin</b> as a partner in your
        child&apos;s early education. We are excited about the possibility of
        welcoming your family into our community and helping your little one
        grow into a curious, confident, and kind individual. Together, we can
        make these early years a time of discovery, joy, and wonder.
        <br />
      </p>
    </div>
  );
};

// &quot;Thank you for creating such a beautiful day in our kids&apos;
// lives. I appreciate all of you for the graduation ceremony, and I
// extend my warmest thanks to everyone for dedicating your precious
// time to our kids.&quot;

// &quot;One of the best preschools with caring and experienced
// teachers, providing an excellent environment for kids.&quot;
