// import doc1 from "../assets/images/image 1.png";
// import doc2 from "../assets/images/8kdr1zt9zymjosk9540moa43bsjsfu2v 1.png";
// import doc3 from "../assets/images/uq3hjvj2jg506xymcz48namtw44882na 1.png";
// import doc4 from "../assets/images/bca4741a1134b502940e10f6ae42849e 1.png";

// export interface Doctor {
//   id: number;
//   name: string;
//   specialty: string;
//   image: string;
// }

// export const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: "Dr. Nigar Muradova",
//     specialty: "Qulaq Burun Boğaz cərrahı, Otonervoloq",
//     image: doc1,
//   },
//   {
//     id: 2,
//     name: "Dr. Nuray Şükürova",
//     specialty: "Qulaq Burun Boğaz cərrahı",
//     image: doc3,
//   },
//   {
//     id: 3,
//     name: "Dr. Kamila Allahverdiyeva",
//     specialty: "Qulaq Burun Boğaz həkimi",
//     image: doc4,
//   },
//   {
//     id: 4,
//     name: "Dr. Mahtaban Qədimali",
//     specialty: "Qulaq Burun Boğaz cərrahı",
//     image: doc2,
//   },
// ];
// data/doctors.ts
import doc1 from "../assets/images/image 1.png";
import doc2 from "../assets/images/8kdr1zt9zymjosk9540moa43bsjsfu2v 1.png";
import doc3 from "../assets/images/uq3hjvj2jg506xymcz48namtw44882na 1.png";
import doc4 from "../assets/images/bca4741a1134b502940e10f6ae42849e 1.png";

export interface EducationItem {
  year: string;
  description: string;
}

export interface TreatmentDirection {
  name: string;
}

export interface ContactInfo {
  phone: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  address: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  position: string;
  center: string;
  education: EducationItem[];
  treatmentDirections: TreatmentDirection[];
  contactInfo: ContactInfo;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Nigar Muradova",
    specialty: "Qulaq Burun Boğaz cərrahı, Otonervoloq",
    image: doc1,
    position: "Qulaq Burun Boğaz Cərrahi, Otonevroloq",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      {
        year: "2010",
        description: "Azərbaycan Tibb Universiteti fərqlənmə diplomu ilə bitirmişdir."
      },
      {
        year: "2010-2011",
        description: "Qulaq Burun Boğaz ixtisası üzrə internatura keçmişdir."
      },
      {
        year: "2015",
        description: "Türkiyə, İzmir Ege Universiteti Qulaq Burun Boğaz anabilim dalında ixtisaslaşmışdır."
      },
      {
        year: "2018-2019",
        description: "Türkiyə Ankara, Başkent Universiteti Nörotoloji kliniyində eğitim almışdır."
      }
    ],
    treatmentDirections: [
      { name: "Pediatrik əməliyyatlar- Tonzillektomiya," },
      { name: "Adenoidektomiya, Qulaq pərdəsinə tüp taxılması" },
      { name: "Septoplastika (burun çəpərinin düzəldilməsi)" },
      { name: "Burun balıqqalaqlarına radiofrekans tətbiqi (konxalara)" },
      { name: "Burun sınığı əməliyyatı (açıq və qapalı reduksiya)" },
      { name: "Polipotomiya; FESC (funksional endoskopik sinus cərrahiyyəsi)" },
      { name: "Rinoplastika" },
      { name: "Qulaq sevyanının plastikası" },
      { name: "Timpanoplastika" },
      { name: "Miringoplastika" },
      { name: "Mastoidektomiya" },
      { name: "Stapedektomiya" },
      { name: "Qulaq törəmələri" },
      { name: "Xoanal atreziya" }
    ],
    contactInfo: {
      phone: "+994 12 123 45 67",
      workingHours: {
        weekdays: "Bazar ertəsi - Cümə: 09:00 - 18:00",
        saturday: "Şənbə: 10:00 - 16:00",
        sunday: "Bazar: Qapalı"
      },
      address: "Bakı şəhəri, Nizami küçəsi 123, Mərkəz binası"
    }
  },
  {
    id: 2,
    name: "Dr. Nuray Şükürova",
    specialty: "Qulaq Burun Boğaz cərrahı",
    image: doc3,
    position: "Qulaq Burun Boğaz Cərrahi",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      {
        year: "2008",
        description: "Azərbaycan Tibb Universitetini bitirmişdir."
      },
      {
        year: "2008-2009",
        description: "Qulaq Burun Boğaz ixtisası üzrə internatura keçmişdir."
      }
    ],
    treatmentDirections: [
      { name: "Pediatrik əməliyyatlar" },
      { name: "Septoplastika" },
      { name: "Rinoplastika" },
      { name: "Burun sınığı əməliyyatı (açıq və qapalı reduksiya)" },
      { name: "Polipotomiya; FESC (funksional endoskopik sinus cərrahiyyəsi)" },
    ],
    contactInfo: {
      phone: "+994 12 123 45 68",
      workingHours: {
        weekdays: "Bazar ertəsi - Cümə: 08:00 - 17:00",
        saturday: "Şənbə: 09:00 - 15:00",
        sunday: "Bazar: Qapalı"
      },
      address: "Bakı şəhəri, Nizami küçəsi 123, Mərkəz binası"
    }
  },
  // Add other doctors with their specific data...
  {
    id: 3,
    name: "Dr. Kamila Allahverdiyeva",
    specialty: "Qulaq Burun Boğaz həkimi",
    image: doc4,
    position: "Qulaq Burun Boğaz Həkimi",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      {
        year: "2012",
        description: "Azərbaycan Tibb Universitetini bitirmişdir."
      }
    ],
    treatmentDirections: [
      { name: "Müayinə" },
      { name: "Konsultasiya" },
      { name: "Miringoplastika" },
      { name: "Mastoidektomiya" },
      { name: "Stapedektomiya" },
    ],
    contactInfo: {
      phone: "+994 12 123 45 69",
      workingHours: {
        weekdays: "Bazar ertəsi - Cümə: 10:00 - 19:00",
        saturday: "Şənbə: 10:00 - 14:00",
        sunday: "Bazar: Qapalı"
      },
      address: "Bakı şəhəri, Nizami küçəsi 123, Mərkəz binası"
    }
  },
  {
    id: 4,
    name: "Dr. Mahtaban Qədimali",
    specialty: "Qulaq Burun Boğaz cərrahı",
    image: doc2,
    position: "Qulaq Burun Boğaz Cərrahi",
    center: "Başgicəllənmə Mərkəzi",
    education: [
      {
        year: "2011",
        description: "Azərbaycan Tibb Universitetini bitirmişdir."
      },
      {
        year: "2011-2012",
        description: "İnternatura keçmişdir."
      }
    ],
    treatmentDirections: [
      { name: "Cərrahi əməliyyatlar" },
      { name: "Müayinə" },
      { name: "Miringoplastika" },
      { name: "Mastoidektomiya" },
      { name: "Stapedektomiya" },
    ],
    contactInfo: {
      phone: "+994 12 123 45 70",
      workingHours: {
        weekdays: "Bazar ertəsi - Cümə: 09:00 - 18:00",
        saturday: "Şənbə: 10:00 - 16:00",
        sunday: "Bazar: Qapalı"
      },
      address: "Bakı şəhəri, Nizami küçəsi 123, Mərkəz binası"
    }
  }
];