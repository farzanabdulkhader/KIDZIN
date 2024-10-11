//COURSES
export const courseItems = [
  {
    title: "Early Explorers",
    desc: "This program is for fostering a nurturing and productive learning environment during the crucial early years of development. Age-group <b>3.5 to 6.5 years</b>, with timin from <b>8:30 AM to 12:00 PM</b>.",
  },
  {
    title: "Foundational Years",
    desc: "Our foundational kindergarden years are vital for building a strong educational base to ensure a stimulating and enriching experience for your child. Age-group <strong>3.5 to 5 years</strong>, and timing <strong>8:30 AM to 12:00 PM</strong>.",
  },
  {
    title: "Day care",
    desc: "Our daycare service is designed to provide a safe and nurturing environment for your child&apos;s care and development throughout the day. Age-group <strong>1 to 7 years</strong>, offering extended hours from <strong>6:00 AM to 6:00 PM</strong>.",
  },
];

//FEATURES
export const featureItems = [
  {
    title: "Learn",
    desc: "At Kidzin, we believe that learning is a lifelong journey. Our dedicated teachers create a curriculum that is fun and engaging. Through a variety of exciting and stimulating activities, we empower children to explore, discover, and develop a thirst for knowledge.",
    image: "images/learn_img_girl_yellow_crop.jpg",
  },
  {
    title: "Play",
    desc: "We believe that playing is a vital part of childhood and contributes to a child&apos;s overall development. It promotes physical, social, and cognitive skills while allowing children to have fun and make friends.",
    image: "images/play_img_blue_crop.jpg",
  },
  {
    title: "Grow",
    desc: "At Kidzin, we are committed to helping your child grow and flourish in a nurturing and supportive environment. We provide the tools, guidance, and care necessary for their overall development.",
    image: "images/grow_img_girl_raise_hand_crop.jpg",
  },
];

//FACILITIES
export const facilitiesItems = [
  {
    title: "Qualified Teaching Staff and Expert Childcare Providers",
    desc: " Our preschool has a fantastic team of teachers and caregivers who are well-trained and really good at taking care of kids. They love helping children learn and grow in a safe and fun place. We&apos;re proud to have them because they make our preschool a great place for your little ones.",
    image: "gallery/img_9.jpg",
  },
  {
    title: "Qualified Teaching Staff and Expert Childcare Providers",
    desc: " Our spacious sensory playroom is a haven for young explorers. Filled with textures, colors, and interactive activities, it engages children&apos;s senses, encouraging curiosity and creativity. This vibrant space provides a safe and stimulating environment where little ones can learn through touch, sight, and play, fostering holistic development.",
    image: "gallery/img_2.jpg",
  },
  {
    title: "Exciting Study Tour Programs",
    desc: "Our exciting study tour programs open doors to endless learning adventures. These enriching field trips expose children to diverse cultures, scientific wonders, and historical treasures. With hands-on experiences beyond the classroom, kids embark on educational journeys that ignite their curiosity and broaden their horizons, making learning a thrilling adventure.",
    image: "gallery/img_19.jpg",
  },
];

//TESTIMONIALS
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
export const testimonialItems = [
  {
    name: "Bushra Zubair",
    desc: "&quot;2022-2023 Batch Graduation Day, Thank you for creating such a beautiful day in our kids&apos; lives I appreciate all of you for the graduation ceremony, and I extend my warmest thanks to everyone for dedicating your precious time to our kids. A special thanks to Kidzin Principal Rashida Ma&apos;am and UKG mentor Beegum Ma&apos;am for providing the best academic year.&quot;",
    image: "icons/bz.jpg",
    rating: (
      <div className="rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
    ),
  },
  {
    name: "Siraj Rahman",
    desc: "&quot;One of the best pre-schools with caring and experienced teachers, providing an excellent for kids.&quot;",
    image: "icons/SR.jpg",
    rating: (
      <div className="rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
    ),
  },
];

//BLOGS
export const blogs = [
  {
    title: "Our Certificate & Online Programs For 2024",
    content:
      " <p> Looking ahead to 2023, we are excited to announce our enhanced Certificate and Online Programs. These innovative offerings are designed to provide even greater flexibility and accessibility for parents and children. Whether you&apos;re interested in our on-site preschool experience or prefer the convenience of online learning, our programs are thoughtfully designed to ensure your child receives the best possible early education. Join us in shaping a bright future for your child in 2023 and beyond.</p>",
    images: ["gallery/img_16.jpg"],
    category: "Special Events",
  },
  {
    title: "Healthy Habits for Preschoolers: Diet and Exercise Tips",
    content:
      " <p> Helping your preschooler develop healthy habits is a top priority. Here are some concise tips for balancing diet and exercise in your child&apos;s life: <br /> <b>Diet:</b> <br /> Variety is Key: Offer fruits, veggies, whole grains, lean proteins, and dairy. <br /> Smart Snacking: Choose nutritious snacks and limit sugary treats. <br /> Stay Hydrated: Encourage water over sugary drinks. <br /> Routine Meals: Set regular meal and snack times. <br /> Family Dinners: Share meals as a family when possible. <br /> <b>Exercise:</b> <br /> Active Play: Encourage activities like running, jumping, and dancing. <br /> Limit Screen Time: Stick to age-appropriate screen time limits. <br /> Outdoor Fun: Enjoy nature walks, bike rides, and playground visits. <br /> Lead by Example: Be a positive role model for healthy habits. <br /> Pediatrician: Consult your child&apos;s pediatrician for guidance. <br /> By focusing on these simple strategies, you can help your preschooler establi foundation for a healthy and active life.</p>",
    images: ["images/Healthy-blog.jpg"],
    category: "Parenting Tips",
  },
];
