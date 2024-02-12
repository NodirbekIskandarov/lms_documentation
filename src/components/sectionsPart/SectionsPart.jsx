import React, { useState } from 'react'
import { SectionsOutletItem, SectionsOutletList, SectionsOutletListPart, SectionsPartChild, SectionsPartMain } from './styles'

function SectionsPart() {
    const [idx, setIdx] = useState("one")
    const [questionIndex, setQuestionIndex] = useState(0)
    function toggleFunc (index) {
        if(questionIndex !== index) {
            setQuestionIndex(index)
        } else {
            setQuestionIndex(null)
        }
    }

    const data1 = [
        {
            question: "Xodim sifatida tizimga qanday kirish mumkin?",
            answer: "Har bir OTMda tizim uchun mas'ul shaxs mavjud yani superadmin bo'ladi. Tizimga kirish uchun login va parol shu mas'uldan yoki kadrlar bo'limidan olishingiz zarur bo'ladi."
        },
        {
            question: "Men OTM xodimiman va men tizimga kirish uchun parolimni unutib qo'ydim. Parolni tiklash imkoni mavjudmi?",
            answer: "Xa albatta mavjud. Buning uchun tizimga kirish joyida yuqorida uch nuqta bosiladi, u yerdan Parolni bekor qilish tanlanadi. Paydo bo'lgan oynaga o'zingizning login yoki ID raqamingiz (ikkalasidan bittasi) yoziladi. Shunda o'z telefon raqamingizga sms kod keladi. Ko'rsatilgan maydonga smsda kelgan kod kiritiladi va tekshirish tugmasi bosiladi. Shunda sizga yangi parol kiritish oynasi ochiladi. (Qo'llanma: https://t.me/hemis_university/530)"
        },
        {
            question: "Men OTM xodimiman men tizimga kira olmayapman Recaptcha tekshirish javobi noto'g'ri deb xabar chiqaveradi. Bunga sabab nima?",
            answer: "Bunga sabab browserda qolib ketgan keshlar yoki browserni eski versiyada ekanligi sabab bo'ladi. Buni to'g'rilash uchun browserni yangilash kerak yoki qaytadan o'rnatish kerak."
        }
    ]

    const data2 = [
        {
            question: "Men OTMda dekan lavozimida ishlayman. Dars jadvalini xato tuzib qo'ydim va o'sha xato turgan sanaga o'qituvchi darsni o'tildi deb belgilab qo'ygan. Buni o'chirib tashlash mumkinmi?",
            answer: "Yo'q mumkin emas. O'chirib bo'lmaydi."
        },
        {
            question: "Dars jadvalini 1 haftaga to'liq tuzdim lekin generatsiya qilishda hafta shablonida xech narsa chiqmayapti?",
            answer: "Bu holatda o'quv rejani haftalarini tekshirib chiqish kerak, orasida takrorlanib qolgan sanalar mavjud bo'lishi mumkin. Xato haftalarni to'g'irlab chiqib dars jadvalini o'chirib qaytadan tuzish kerak."
        },
        {
            question: "Dars jadvali tuzishda excelldan yoki boshqa joydan import qilish orqali dars jadvali shakllantirsa bo'ladimi?",
            answer: "Yo'q bunday imkoniyat mavjud emas."
        },
        {
            question: "Men o'qituvchiman davomat qilishda adashib kelgan talabni yo'q qilib qo'yibman. 'NB'ni o'chirsam bo'ladimi?",
            answer: "Yo'q tizimga kiritilgan 'NB' o'chirilmaydi. 'NB'ni faqat dekan roli orqali sababli qilish mumkin. Xato qo'yilgan 'NB'larni dekanatga tushuntirish xati yozsa faqat dekan tomonidan sababliga o'zgartirish mumkin."
        },
        {
            question: "Men o`qituvchiman kecha texnik nosozlik tufayli davomat qila olmadim. O'tib ketgan sanani davomat qilsam bo`ladimi?",
            answer: "Xa albatta bo'ladi. Faqat buning uchun OTM rahbariyati tomonidan ruhsat berilsa OTMingizdagi hemis admini davomat qilish uchun 'dostup'ni ochib berishi kerak."
        },
        {
            question: "Dars jadvalini kiritishda amaliy mashg'ulotni bitta o'quv xonasiga qo'ymoqchi bo'lsam ushbu xona band deb xabar chiqmoqda. Bizda amaliy mashg'ulotlar ham ikkita guruh birga qo'shilib o'tadi. Amaliy mashg'ulotni ikkita guruhni bitta xonaga qo'yish mumkinmi?",
            answer: "Xa mumkin. Buning uchun o'z OTMingiz superadminiga murojaat qilishingiz kerak admin ruxsat berib qo'yishi kerak."
        }
    ]


    const data3 = [
        {
            question: "Xato shakillantirilgan o'quv rejani o'chirsh mimkinmi?",
            answer: "Xa mumkin faqat buning uchun unga tegishli barcha ma'lumotlarni yani guruh, hafta, semestr, fan bloki, fanlarni o'chirib chiqish kerak?"
        },
        {
            question: "Bizda sirtqi talim shakli o'qish davri 4.5 yil 9 ta semestr o'qiydi lekin o'quv reja yaratishda tizim 4.5 yilni qabul qilmayapti?",
            answer: "Sirtilar uchun ham o'qish davrini 5 yil qilib kiritasz keyin semestrlar royxatidan ortiqcha sesmtrni o'chrib tashlaysiz."
        }
    ]

    const data4 = [
        {
            question: "Men dekanat xodimiman guruhlarga nazorat jadvali qo'yaman desam nazorat turi chiqmyapti?",
            answer: "O'quv rejaning tegishli fan slabusida nazorat turi kiritilmagan."
        },
        {
            question: "Men o'qituvchiman o'zimga tegishli guruh talabalriga topshiriq yubormoqchi bo'lsam nazorat turi degan maydonda nazorat turi ko'rinmayapti?",
            answer: "Dekanat nazorat jadvalida siz uchun nazorat turi belgilamagan."
        },
        {
            question: "Men o'qituvchiman yakuniy nazorat qaydnomasiga talabalarga baho qo'yaman desam birorta ham talaba ko'rinmayapti?",
            answer: "Oraliq va joriy nazoratlar baholanmagan bo'ladi bu xolatda."
        },
        {
            question: "Men o'qituvchiman yakuniy nazorat baholarini kiritsam muddat o'tib bo'lgan deb xabar chiqmoqda. Qancha muddat beriladi baho qo'yish uchun.",
            answer: "Nazorat sanasi qo'yilgan kundan boshlab 72 soat ichida baholar tizimga kiritilishi shart."
        }
    ]

    const data5 = [
        {
            question: "Men talabaman tizimga qanday qilib ro'yxatdan o'tib kirsam bo'ladi?",
            answer: "Tizimda talaba o'zi ro'yxatdan o'ta olmaydi. Tegishli OTM talabani tizimga kiritib talabaga kirish uchun link, ID va parol berishi kerak?"
        },
        {
            question: "Men talabaman tizimga kirish parolimni unutib qo'ydim. Parolni tiklasam bo'ladimi?",
            answer: `"Xa albatta bo'ladi. Buning uchun tizimga kirish joyida yuqorida ""uch nuqta"" bosiladi, u yerdan ""Parolni bekor qilish"" tanlanadi. Paydo bo'lgan oynaga o'zingizning lID raqamingiz yoziladi. Shunda o'z telefon raqamingizga sms kod keladi. Ko'rsatilgan maydonga smsda kelgan kod kritiladi va tekshirish tugmasi bosiladi. Shunda sizga yangi parol kiritish oynasi ochiladi. (Qo'llanma: https://t.me/hemis_university/533)`
        },
        {
            question: "Men sirtqi ta'lim shaklida o'qiman menga chaqruv qog'ozi kerak uni hemsi tizimidan olsa bo'adimi?",
            answer: "Xa bo'ladi. Buning uchun shaxsiy profilingizga kirib Talaba ma'lumoti bo'limidan Talaba hjjati menyusiga kirib o'sha yerdan ko'chrib olish mumkin."
        },
        {
            question: `Men talabaman. Men yakuniy nazorat topshirib 5 baho oldm lekin o'z shaxsiy profilimga kirib "O'zlashtirish" menyusiga kirganda meni bahoyim u yerda ko'rinmayapti.`,
            answer: "Demak fan o'qituvchingiz yakuniy nazorat baholarini qaydnomaga qo'ymagan."
        }
    ]

    const data6 = [
        {
            question: "Men OTMga qabul qilingan talabani kiritmoqchi bo`lsam boshqa OTMda o'qimoqda deb xabar chiqmoqda. Nima qilish kerak bu xolatda?",
            answer: "Demak sizni OTMingizga qabul qilingan talaba avval boshqa OTM o'qigan u OTM esa bu talabani chetlashtirish qilmagan. Bu xolat xabarda ko'rsatilgan OTMga murojat qilish kerak va talabani chetlashtirib uni sinxronizatsiya(yani taxrilab qayta saqalash) qilib berishini so'rash kerak?"
        },
        {
            question: "Men dekanat xodimiman bir talabani JSHSHIR (PINFL)ni xato kiritgan ekanman endi uni to'g'rilasa bo'ladimi?",
            answer: "Xa bo'ladi. Buning uchun vazirlikka rasmiy xat orqali murojat qilish kerak?"
        },
        {
            question: "Bir talabani tizimga kiritganman lekin bu talaba davlat xizmatlari agentligida va boshqa davlat tashkilotlarida ham ko'rinmayapti sababi nima?",
            answer: `"Bunga xolatga 3 ta sabab bo'lishi mumkin: 1) Siz talabani tizimga kirtgansz lekin uni xali guruhga briktrmagan bolishngiz mumkin.2) Talaba malumotlari vazirlik serveri bilan sinxonizatsiya bo'lmay qolgan bo'lishi mumkin uni sinxronizatsiya(yani taxrilab qayta saqlash) qilish kerak.3) HEMIS tizimi bilan integratsiya qilgan tashkilotning o'zini tizimida muammo bo'lgan bo'lishi mumkin.`
        }
    ]

  return (
    <SectionsPartMain>
        <SectionsPartChild>
            <SectionsOutletListPart>
                <SectionsOutletList>
                    <h2>Bo'limlar</h2>
                    <p id='one' className={idx==="one" && "active"} onClick={(e) => setIdx(e.target.id)}>Tizimga kirish</p>
                    <p id='two' className={idx==="two" && "active"} onClick={(e) => setIdx(e.target.id)}>Dars jadvali</p>
                    <p id='three' className={idx==="three" && "active"} onClick={(e) => setIdx(e.target.id)}>O'quv reja</p>
                    <p id='four' className={idx==="four" && "active"} onClick={(e) => setIdx(e.target.id)}>Nazoratlar jadvali</p>
                    <p id='five' className={idx==="five" && "active"} onClick={(e) => setIdx(e.target.id)}>Talabalar uchun</p>
                    <p id='six' className={idx==="six" && "active"} onClick={(e) => setIdx(e.target.id)}>Talaba harakati</p>
                </SectionsOutletList>
                <SectionsOutletItem>
                    {idx==="one" && (<div className='active'>
                        <h1>Tizimga kirish</h1>
                        {data1?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                    {idx==="two" && (<div className='active'>
                        <h1>Dars jadvali</h1>
                        {data2?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                    {idx==="three" && (<div className='active'>
                        <h1>O'quv reja</h1>
                        {data3?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                    {idx==="four" && (<div className='active'>
                        <h1>Nazoratlar jadvali</h1>
                        {data4?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                    {idx==="five" && (<div className='active'>
                        <h1>Talabalar uchun</h1>
                        {data5?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                    {idx==="six" && (<div className='active'>
                        <h1>Talaba harakati</h1>
                        {data6?.map((item, index) => {
                            return (
                                <div key={index} className='main-question'>
                                    <div className='question' onClick={() => toggleFunc(index)}>
                                        <p>{item.question}</p>
                                    </div>
                                    <div className={questionIndex===index ? "answer-active" : "answer"}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
                </SectionsOutletItem>
            </SectionsOutletListPart>
        </SectionsPartChild>
    </SectionsPartMain>
  )
}

export default SectionsPart