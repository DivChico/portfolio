import React from "react";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";
const TESTIMONIALS = [
  {
    name: " محمد الخاتم",
    imgUrl:
      "https://scontent.fjrs29-1.fna.fbcdn.net/v/t39.30808-1/441910552_3848224902080977_8616273649730105061_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eh55hH3Q4uIQ7kNvgEioMVB&_nc_ht=scontent.fjrs29-1.fna&oh=00_AYCEv2jXbbU1GSE02GjnFAK8fyspV8WZkpBDTKAmImr4rA&oe=666E0FD2",
    role: " web student",
    source: "facebook",
    link: "",
    comment:
      "بعيدا عن الانتقادات .. كنت متوتر من فكره امتى ابتدي رياكت رغم اني بعرف كل اللي قلته .. بس دلوقت ح اعقلها واتوكل .. تسلم ي عبدالله❤️ ، كمل منشورات زي دي .",
  },
  {
    name: "Ezadeen Hamid",
    imgUrl:
      "https://scontent.fjrs29-1.fna.fbcdn.net/v/t1.6435-1/33566037_1710053785746084_2327667576290672640_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aqxNFk1YpQ0Q7kNvgF3Ebtt&_nc_ht=scontent.fjrs29-1.fna&oh=00_AYDzYZMsfS9sfTm1lesn1xfyGG_wAktWjeMdb-G49xPDOQ&oe=668FA509",
    role: " Engineer",
    source: "facebook",
    link: "",
    comment:
      "Abdullah Alatawwna اقسم بالله التعليق دا طبطب عليا و اداني حماس و رفع معنوياتي ✨🌹💪.. انا غرقان في الجافاسكربت و خلصتها من حوالي ٣ اسابيع و مش قادر اطبقها بي طريقة ترضيني . و زهجت من عدم القدرة علي التطبيق 💔لدرجة اني مش طايق اللابتوب بتاعي .و فعلا انا كنت محتاج للكلام دا 💖. منشور ✨قيمتو دهب .",
  },
  {
    name: "Mohamed EH Mhana",
    imgUrl:
      "https://scontent.fjrs29-1.fna.fbcdn.net/v/t39.30808-1/441457721_3491211741168807_4487452360928519782_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4ONZ92blHWwQ7kNvgHFCQ9m&_nc_ht=scontent.fjrs29-1.fna&oh=00_AYBznp7u31U2eIbxkzXIB6_RX5-tXegnmniwAmN8QMFTqA&oe=666E2200",
    role: "UI/UX designer ",
    source: "facebook",
    link: "",
    comment:
      "صراحة مبدع وطريقة التعامل مع حضرتك ممتازة وبلنسبة الي انت من افضل الناس الي اشتغلت معهم 💥😍",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className="my-5   py-10   space-y-10 ">
      <p className=" text-3xl font-bold text-center">
        What people say about me
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {TESTIMONIALS.map((item, idx) => {
          return <TestimonialCard key={idx} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
