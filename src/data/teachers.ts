import { TeacherData } from '@/src/types';

/**
 * Daffodil University School & College Teacher Database
 * Personalized digital keepsakes for each respected educator.
 */
export const teachers: Record<string, TeacherData> = {
  mousumi: {
    id: "mousumi",
    name: "Ms. Mousumi Akter",
    gender: "female",
    honorific: "Ma'am",
    designation: "Sr. Assistant Teacher",
    subject: "Arts",
    greeting: "Welcome, Ms. Mousumi.",

    letter: `It is a rare privilege to be taught by someone who truly understands the quiet power of what they share. Your lessons have shaped not just my understanding of the subject, but the way I approach curiosity, discipline, and perseverance.

Whenever things felt overwhelming, your composure and clarity in the classroom set an anchor. You never rushed through the difficult moments, and you made sure no question was ever made to feel small or unwelcome.

Thank you for holding high standards, for meeting us with unwavering patience, and for believing in our potential before we even fully recognized it ourselves.`,

    memories: [
      {
        title: "Your patience",
        text: "I remember the afternoons you stayed behind to walk through problems step by step, never showing a hint of frustration even when we needed the same concept explained three different ways."
      },
      {
        title: "Something you taught me",
        text: "You taught me that true mastery is not about speed or memorization, but about understanding the foundational principles and having the courage to question them."
      },
      {
        title: "A moment I'll remember",
        text: "The look of genuine pride you gave when our class finally cracked that complex problem. It showed us that our growth was truly personal to you."
      }
    ],

    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",

    studentName: "Your students",

    whyWebsiteNote: "Instead of giving a traditional paper card that might get misplaced, I wanted to build a quiet digital haven you can visit whenever you want to be reminded of how much you are appreciated."
  },

  // Administration
  mostofa: {
    id: "mostofa",
    name: "Md. Mostofa Faruk Ahamed",
    gender: "male",
    honorific: "Sir",
    designation: "Principal",
    greeting: "Honorable Principal Sir,",
    letter: `Your visionary leadership and steadfast guidance have made Daffodil University School & College a place where students feel nurtured, ambitious, and valued. 

Thank you for fostering an environment of integrity, academic distinction, and warmth. Your quiet dedication behind every successful milestone inspires us to conduct ourselves with dignity and purpose.`,
    memories: [
      {
        title: "Your visionary leadership",
        text: "The inspiring words you shared during morning assemblies that instilled a sense of school pride and personal responsibility in every student."
      },
      {
        title: "Guiding the institution",
        text: "How you always keep students' growth and well-being at the heart of every institutional decision."
      },
      {
        title: "An exemplary role model",
        text: "Your calm authority and approachable demeanor that make all of us proud to call ourselves your students."
      }
    ],
    finalMessage: "Leadership is not just about directing; it is about inspiring futures. Thank you for leading our school with grace.",
    studentName: "Your students"
  },

  nabi: {
    id: "nabi",
    name: "SK Mahmudun Nabi",
    gender: "male",
    honorific: "Sir",
    designation: "Vice Principal",
    subject: "Mathematics",
    greeting: "Respected Sir,",
    letter: `With over twenty-five years of dedicated mentorship, your devotion to mathematical logic and disciplined scholarship has illuminated countless paths.

Thank you for teaching us that difficult problems are simply puzzles waiting for patient minds, and for always being a reassuring presence across our campus.`,
    memories: [
      {
        title: "Mathematical elegance",
        text: "The way you unravel seemingly impossible equations into clear, intuitive insights."
      },
      {
        title: "Decades of wisdom",
        text: "Your wealth of experience that brings perspective, calm, and confidence to our academic journey."
      },
      {
        title: "Always available to help",
        text: "Never turning a curious student away, even with a demanding vice-principal schedule."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  // Teachers from CSV
  towfiq: {
    id: "towfiq",
    name: "Mr. Md. Towfiq Elahi",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Al-Quran & Islamic Studies",
    greeting: "Welcome, Respected Teacher.",
    letter: `Your teachings have been a gentle light, teaching us not only textbook knowledge but moral grounding, empathy, and reverence for truth.

Thank you for your warmth, your profound patience, and the uplifting serenity you bring into the classroom.`,
    memories: [
      {
        title: "Moral clarity",
        text: "Teaching us how values and knowledge walk hand-in-hand in making a meaningful life."
      },
      {
        title: "Patience and understanding",
        text: "The respectful and calm manner with which you address every question."
      },
      {
        title: "Lasting inspiration",
        text: "Reminding us that character is the true measure of education."
      }
    ],
    finalMessage: "Thank you for being part of my journey and shaping my moral foundation.",
    studentName: "Your students"
  },

  monzila: {
    id: "monzila",
    name: "Ms. Monzila Akter Moni",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Business Studies (BBA)",
    greeting: "Welcome, Ms. Monzila.",
    letter: `Your vibrant energy in the classroom makes learning both exciting and deeply relatable. You connect theories to the real world with effortless charm.

Thank you for always encouraging our ideas and giving us the confidence to speak up and aim higher.`,
    memories: [
      {
        title: "Encouraging our voices",
        text: "How you celebrate every student's contribution during group discussions."
      },
      {
        title: "Practical insights",
        text: "Translating business concepts into creative case studies that sparked our curiosity."
      },
      {
        title: "Kindness and warmth",
        text: "Your bright smile that instantly eases the classroom atmosphere on stressful exam days."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  mukta: {
    id: "mukta",
    name: "Mahmuda Islam Mukta",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "English",
    greeting: "Welcome, Ma'am.",
    letter: `Through the beauty of literature and language, you taught us how to express thoughts we didn’t even know we had. 

Thank you for correcting our mistakes with gentleness, encouraging our creative writing, and helping us find our own authentic voices.`,
    memories: [
      {
        title: "The power of words",
        text: "Teaching us that literature is a window into human empathy and imagination."
      },
      {
        title: "Gentle guidance",
        text: "Taking time to review our essays and highlighting our strengths before pointing out corrections."
      },
      {
        title: "A memorable class",
        text: "When you read that classic poem aloud and the whole room fell into quiet awe."
      }
    ],
    finalMessage: "Words have power, and you taught us how to wield them with care. Thank you.",
    studentName: "Your students"
  },

  mizanur: {
    id: "mizanur",
    name: "Md. Mizanur Rahman",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Bangla",
    greeting: "শ্রদ্ধেয় স্যার,",
    letter: `বাংলা ভাষা ও সাহিত্যের গভীর মাধুর্য আপনি আমাদের অন্তরে পৌঁছে দিয়েছেন। আপনার পাঠদানের আন্তরিকতা ক্লাসের পরিবেশকে সবসময় প্রাণবন্ত রাখে।

আমাদের মাতৃভাষাকে নতুনভাবে ভালোবাসতে শেখানোর জন্য এবং সবসময় একজন অভিভাবকের মতো পথ দেখানোর জন্য আপনার প্রতি অশেষ কৃতজ্ঞতা।`,
    memories: [
      {
        title: "ভাষার প্রতি ভালোবাসা",
        text: "বাংলা কবিতার অন্তর্নিহিত ভাবার্থ যেভাবে আপনি সহজ ভাষায় তুলে ধরতেন, তা ভোলার মতো নয়।"
      },
      {
        title: "স্নেহ ও উপদেশ",
        text: "শুধুমাত্র ভালো ছাত্র হওয়া নয়, ভালো মানুষ হওয়ার যে উপদেশ আপনি সবসময় দিয়েছেন।"
      },
      {
        title: "স্মরণীয় পাঠদান",
        text: "ক্লাসে আপনার চমৎকার বাচনভঙ্গি এবং শিক্ষার্থীদের সাথে নিবিড় সংযোগ।"
      }
    ],
    finalMessage: "কিছু শিক্ষা শুধু ব্ল্যাকবোর্ডে সীমাবদ্ধ থাকে না, আজীবন অন্তরে রয়ে যায়। শিক্ষক দিবসের আন্তরিক শ্রদ্ধা।",
    studentName: "আপনার শিক্ষার্থীরা"
  },

  rimi: {
    id: "rimi",
    name: "Ms. Rashna Sharin Rimi",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "English",
    greeting: "Welcome, Ms. Rashna.",
    letter: `Your classroom is always full of thoughtfulness and encouragement. You showed us that mastering a language is about confidence and consistent curiosity.

Thank you for being so patient, so attentive to every student, and for turning nervous attempts at speaking into confident presentations.`,
    memories: [
      {
        title: "Cultivating confidence",
        text: "Never letting anyone feel embarrassed about pronunciation or grammar mistakes."
      },
      {
        title: "Engaging discussions",
        text: "Making English comprehension lively through stories, discussions, and roleplay."
      },
      {
        title: "Your caring nature",
        text: "Checking in whenever you noticed a student was having an off day."
      }
    ],
    finalMessage: "Thank you for building our confidence and being an extraordinary mentor.",
    studentName: "Your students"
  },

  alif: {
    id: "alif",
    name: "Mr. Md. Alif Hossain",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Political Science & Social Studies",
    greeting: "Welcome, Sir.",
    letter: `With your extensive teaching experience, you bring nuance and depth to every discussion on society, governance, and world affairs.

Thank you for challenging us to become conscious, thoughtful citizens who critically analyze the world around us.`,
    memories: [
      {
        title: "Critical thinking",
        text: "Encouraging us to look at world events from multiple viewpoints rather than taking things at face value."
      },
      {
        title: "Vivid lectures",
        text: "How historical movements came alive through your detailed and passionate storytelling."
      },
      {
        title: "Dedication to students",
        text: "Your unwavering commitment to ensuring every student stays engaged."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  enamul: {
    id: "enamul",
    name: "Mr. Enamul Kobir",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Physical Education",
    greeting: "Welcome, Coach & Teacher.",
    letter: `You taught us that discipline on the sports ground translates directly to strength in life. Your enthusiasm, energy, and commitment to teamwork inspire all of us.

Thank you for keeping our spirits high and teaching us the resilience to stand right back up after any setback.`,
    memories: [
      {
        title: "True sportsmanship",
        text: "Teaching us that respecting our peers is just as important as winning."
      },
      {
        title: "Unstoppable energy",
        text: "The motivation and infectious spirit you bring to the field every single day."
      },
      {
        title: "Lessons in resilience",
        text: "Pushing us to overcome fatigue and realize what our bodies and minds are capable of."
      }
    ],
    finalMessage: "A great mentor builds both mind and stamina. Thank you for coaching us in life.",
    studentName: "Your students"
  },

  ana: {
    id: "ana",
    name: "Ms. Estak Nahar Ana",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "English",
    greeting: "Welcome, Ms. Estak.",
    letter: `Your bright presence and approachable manner make English class a space where we always feel excited to learn. 

Thank you for your creativity, your warm feedback, and the dedication you put into every single lesson.`,
    memories: [
      {
        title: "Creative assignments",
        text: "The interactive exercises that made language learning feel effortless and fun."
      },
      {
        title: "Encouraging feedback",
        text: "Your constructive notes on our assignments that motivated us to write better."
      },
      {
        title: "Your warm demeanor",
        text: "Making every student feel acknowledged and appreciated in class."
      }
    ],
    finalMessage: "Thank you for inspiring our creativity and being part of our journey.",
    studentName: "Your students"
  },

  mim: {
    id: "mim",
    name: "Ms. Ishrat Jahan Mim",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Textile & Science",
    greeting: "Welcome, Ms. Ishrat.",
    letter: `Your passion for science and modern technical disciplines brings a unique and refreshing perspective to our studies.

Thank you for demonstrating that curiosity and practical applications are where real innovation begins.`,
    memories: [
      {
        title: "Hands-on learning",
        text: "Connecting theoretical formulas to tangible, everyday materials and technology."
      },
      {
        title: "Approachable guidance",
        text: "Always taking time to answer questions and clarify confusing steps."
      },
      {
        title: "Inspirational drive",
        text: "Showing us the vast possibilities of pursuing specialized fields with confidence."
      }
    ],
    finalMessage: "Thank you for sparking our curiosity and showing us what lies beyond textbooks.",
    studentName: "Your students"
  },

  hriday: {
    id: "hriday",
    name: "Mr. Hriday Rajbonshi",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Business Studies (MBA)",
    greeting: "Welcome, Mr. Hriday.",
    letter: `Your modern approach and practical business acumen make complex financial principles remarkably clear. 

Thank you for challenging us to think like problem-solvers and future leaders in every project we undertake.`,
    memories: [
      {
        title: "Analytical thinking",
        text: "Showing us how numbers and strategy form the backbone of real-world success."
      },
      {
        title: "Mentorship",
        text: "Offering advice on career paths and encouraging us to set ambitious goals."
      },
      {
        title: "Patience and clarity",
        text: "Breaking down complex accounting sheets until everyone was on the same page."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  shilpi: {
    id: "shilpi",
    name: "Ms. Shilpi Akter",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "English",
    greeting: "Welcome, Ms. Shilpi.",
    letter: `Your calm, thoughtful demeanor creates a classroom environment of genuine concentration and peaceful learning.

Thank you for your tireless effort to elevate our language skills and for caring so deeply about our progress.`,
    memories: [
      {
        title: "Calm dedication",
        text: "The steady patience with which you guide students through difficult grammar concepts."
      },
      {
        title: "Individual attention",
        text: "Ensuring quieter students get the attention and encouragement they need."
      },
      {
        title: "Uplifting words",
        text: "Reminding us that every small improvement counts towards greater fluency."
      }
    ],
    finalMessage: "Thank you for your patience and for guiding us with such genuine care.",
    studentName: "Your students"
  },

  sumona: {
    id: "sumona",
    name: "Ms. Sumona Rahman",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Accounting",
    greeting: "Welcome, Ms. Sumona.",
    letter: `Balancing sheets and understanding ledger systems can be daunting, but your step-by-step clarity turns confusion into confidence.

Thank you for your dedication, your structured teaching, and your readiness to help whenever we felt lost.`,
    memories: [
      {
        title: "Structured clarity",
        text: "Making accounting entries feel logical and straightforward rather than intimidating."
      },
      {
        title: "Unfailing patience",
        text: "Recalculating and explaining until the very last student grasped the balance sheet."
      },
      {
        title: "Sincere encouragement",
        text: "Believing in our ability to master a demanding discipline."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  tonima: {
    id: "tonima",
    name: "Ms. Noushin Sharmin Tonima",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Science",
    greeting: "Welcome, Ms. Noushin.",
    letter: `Your scientific curiosity and vibrant explanations make the laws of nature fascinating to explore. 

Thank you for turning textbook definitions into exciting discoveries and helping us look at the natural world with wonder.`,
    memories: [
      {
        title: "Inspiring wonder",
        text: "Showing us how scientific principles govern everything around us in daily life."
      },
      {
        title: "Interactive sessions",
        text: "Encouraging experiments and active questioning in the lab and classroom."
      },
      {
        title: "Warm encouragement",
        text: "Celebrating our curiosity and pushing us to explore scientific concepts further."
      }
    ],
    finalMessage: "Thank you for inspiring our love for science and learning.",
    studentName: "Your students"
  },

  sheba: {
    id: "sheba",
    name: "Ms. Umme Hani Sheba",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Computer Science & Engineering",
    greeting: "Welcome, Ms. Umme Hani.",
    letter: `In an era defined by technology, your computer science classes showed us the magic of writing code and building solutions from scratch.

Thank you for debugging our errors with such calm patience and showing us that problem solving is a superpower.`,
    memories: [
      {
        title: "Demystifying tech",
        text: "Turning abstract algorithms and code syntax into fun, logical challenges."
      },
      {
        title: "Patience with errors",
        text: "Sitting next to our computers to help us spot that one missing semicolon with a smile."
      },
      {
        title: "Empowering innovation",
        text: "Teaching us that technology is an art of creativity and problem-solving."
      }
    ],
    finalMessage: "Every line of code we write carries the foundation you helped build. Thank you.",
    studentName: "Your students"
  },

  tawsif: {
    id: "tawsif",
    name: "Mr. Tawsif Kabir",
    gender: "male",
    honorific: "Sir",
    designation: "Sr. Assistant Teacher",
    subject: "Physics",
    greeting: "Welcome, Mr. Tawsif.",
    letter: `Physics is the language of the universe, and you have a gift for making even the most complex mechanics intuitive and breathtaking.

Thank you for inspiring our minds, challenging our assumptions, and showing us the beauty hidden behind mathematical formulas.`,
    memories: [
      {
        title: "Mind-expanding experiments",
        text: "Bringing classroom physics to life with demonstrations that left us captivated."
      },
      {
        title: "Deep understanding",
        text: "Insisting we understand the physics before touching the mathematics."
      },
      {
        title: "Academic rigor",
        text: "Pushing us to reach higher academic standards than we thought possible."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  jubayer: {
    id: "jubayer",
    name: "Mr. Jubayer Hasan",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Mathematics",
    greeting: "Welcome, Sir.",
    letter: `With eight years of teaching excellence, you make mathematics an art of logic and discovery rather than intimidation.

Thank you for your tireless dedication, your clear proofs, and for showing us that perseverance is the true secret to cracking any equation.`,
    memories: [
      {
        title: "Clarity of proof",
        text: "How you effortlessly break down multivariable problems into manageable steps."
      },
      {
        title: "Encouraging struggle",
        text: "Teaching us that getting stuck is simply the first step of mathematical learning."
      },
      {
        title: "Dedication",
        text: "Never leaving the board until every student's doubts were thoroughly addressed."
      }
    ],
    finalMessage: "Thank you for building our logical thinking and being a mentor we truly respect.",
    studentName: "Your students"
  },

  nusrat: {
    id: "nusrat",
    name: "Ms. Nusrat Jahan",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "English",
    greeting: "Welcome, Ms. Nusrat.",
    letter: `Your calm voice and literary insight make English lessons deeply engaging. You encourage thoughtful expression and teach us to write with clarity and elegance.

Thank you for your kindness, your thoughtful guidance, and the care you bring into each day.`,
    memories: [
      {
        title: "Refined expression",
        text: "Teaching us how nuance and word choice elevate ordinary sentences into memorable prose."
      },
      {
        title: "Gentle encouragement",
        text: "Inspiring quieter students to participate and find joy in class presentations."
      },
      {
        title: "Attentive feedback",
        text: "Taking time to leave meaningful comments on our creative writing assignments."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  anika: {
    id: "anika",
    name: "Ms. Anika Tasnim",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    subject: "Computer Science & Engineering",
    greeting: "Welcome, Ms. Anika.",
    letter: `Your passion for computing and software systems is contagious. You make modern technology approachable and inspire us to build with purpose.

Thank you for your fresh perspective, your technical expertise, and for encouraging us to dream big in the digital world.`,
    memories: [
      {
        title: "Modern tech insights",
        text: "Introducing us to contemporary technology and programming paradigms with clarity."
      },
      {
        title: "Approachable mentorship",
        text: "Always being patient and cheerful while walking us through logic problems."
      },
      {
        title: "Fostering creativity",
        text: "Encouraging us to think about how code can solve real problems around us."
      }
    ],
    finalMessage: "Thank you for guiding our first steps in technology and believing in our potential.",
    studentName: "Your students"
  },

  salim: {
    id: "salim",
    name: "Md. Salim Uddin",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    subject: "Arts & Humanities",
    greeting: "Welcome, Sir.",
    letter: `Your appreciation for culture, heritage, and artistic expression brings immense depth to our education. 

Thank you for encouraging us to appreciate aesthetic nuance and for reminding us that education is about nurturing the soul as well as the mind.`,
    memories: [
      {
        title: "Artistic perspective",
        text: "Opening our eyes to the cultural and emotional significance behind artistic works."
      },
      {
        title: "Cultivating respect",
        text: "Instilling deep respect for our heritage and humanistic values."
      },
      {
        title: "Thoughtful discussions",
        text: "Classes where ideas were treated with intellectual respect and curiosity."
      }
    ],
    finalMessage: "Thank you for inspiring our creative and cultural imagination.",
    studentName: "Your students"
  },

  dipto: {
    id: "dipto",
    name: "Dipto Chaccroboti",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Sir.",
    letter: `Your dedication, punctual presence, and genuine commitment to our learning have made a lasting impression on our batch.

Thank you for your energetic guidance, for answering our queries with sincerity, and for always being a reliable mentor.`,
    memories: [
      {
        title: "Energetic teaching",
        text: "Keeping the classroom active and focused throughout the entire period."
      },
      {
        title: "Prompt support",
        text: "Always ready to clarify topics and help students catch up."
      },
      {
        title: "Professional integrity",
        text: "Setting an example of diligence and commitment every single day."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  sharna: {
    id: "sharna",
    name: "Rabeya Khanom Sharna",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your warm smile and encouraging words make your classroom a sanctuary of calm and learning.

Thank you for meeting every student with kindness, treating our questions with utmost respect, and giving us confidence in our own abilities.`,
    memories: [
      {
        title: "Warm encouragement",
        text: "Making sure no student ever felt afraid to speak up or ask for help."
      },
      {
        title: "Dedication to clarity",
        text: "Using intuitive analogies that made challenging topics immediately clear."
      },
      {
        title: "Genuine care",
        text: "Your radiant positivity that brightens even the most demanding school days."
      }
    ],
    finalMessage: "Thank you for your kindness, patience, and for touching our lives with your teachings.",
    studentName: "Your students"
  },

  mahi: {
    id: "mahi",
    name: "Mahi Rashid",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Teacher.",
    letter: `Your dedication to student success and your enthusiastic delivery turn every lesson into an inspiring session.

Thank you for bringing your whole heart into teaching and showing us the value of consistency and passion.`,
    memories: [
      {
        title: "Passionate delivery",
        text: "The genuine excitement you bring to every topic you teach."
      },
      {
        title: "Supportive guidance",
        text: "Always taking time to ensure everyone feels included and understood."
      },
      {
        title: "Inspiring consistency",
        text: "Demonstrating how steady hard work yields great results."
      }
    ],
    finalMessage: "Some lessons stay with us forever. Thank you for being an inspiring part of my journey.",
    studentName: "Your students"
  },

  jeba: {
    id: "jeba",
    name: "Maria Islam Jeba",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your structured teaching and gentle approach create an optimal environment for focused learning.

Thank you for your patience, your thoughtful answers, and the encouragement you consistently provide to all of us.`,
    memories: [
      {
        title: "Structured teaching",
        text: "How methodically you lay out each lesson so that learning flows naturally."
      },
      {
        title: "Gentle patience",
        text: "Never losing patience even with repeated questions on difficult topics."
      },
      {
        title: "Supportive advice",
        text: "Guiding us with warmth and understanding whenever we needed support."
      }
    ],
    finalMessage: "Thank you for being such a caring and committed educator in our lives.",
    studentName: "Your students"
  },

  nazmun: {
    id: "nazmun",
    name: "Nazmun Naher",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your thorough preparation and deep commitment to your students' growth shine through in every class.

Thank you for holding us to high standards while providing the gentle scaffolding needed to reach them.`,
    memories: [
      {
        title: "Thorough preparation",
        text: "The care and attention to detail visible in every lecture and assignment."
      },
      {
        title: "Believing in us",
        text: "Encouraging us to attempt difficult challenges without fear of failure."
      },
      {
        title: "Enduring patience",
        text: "Listening attentively to students' perspectives with genuine interest."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  mehnaz: {
    id: "mehnaz",
    name: "Mehnaz Binte Moyazzem",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your gentle wisdom and attentive teaching style make learning an uplifting experience.

Thank you for your tireless dedication, your encouraging words, and the kindness you extend to every student.`,
    memories: [
      {
        title: "Gentle guidance",
        text: "Correcting our mistakes with kindness so we always felt motivated to try again."
      },
      {
        title: "Clear explanations",
        text: "Turning abstract concepts into crystal clear understandings."
      },
      {
        title: "Kind heart",
        text: "Your caring attitude that makes every student feel valued and respected."
      }
    ],
    finalMessage: "Thank you for your warmth, wisdom, and for guiding us along the way.",
    studentName: "Your students"
  },

  alamin: {
    id: "alamin",
    name: "Al Amin",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Sir.",
    letter: `Your dedication, discipline, and earnest commitment to our learning have made you a pillar of support for our class.

Thank you for keeping us focused, challenging our limits, and always maintaining high academic integrity.`,
    memories: [
      {
        title: "Discipline and focus",
        text: "Instilling a sense of purpose and focus in the classroom."
      },
      {
        title: "Clear methodology",
        text: "Systematically resolving doubts until every student was confident."
      },
      {
        title: "Steadfast support",
        text: "Always being there to support students with coursework and advice."
      }
    ],
    finalMessage: "Some lessons stay with us long after class ends. Thank you for your guidance.",
    studentName: "Your students"
  },

  farid: {
    id: "farid",
    name: "Farid Ahamed",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Sir.",
    letter: `Your calm composure and practical teaching style bring stability and confidence into the classroom.

Thank you for your tireless patience, for breaking down complex topics, and for guiding us with such genuine goodwill.`,
    memories: [
      {
        title: "Practical instruction",
        text: "Focusing on what truly matters to help students understand core concepts."
      },
      {
        title: "Calm presence",
        text: "Handling classroom challenges with steady leadership and fairness."
      },
      {
        title: "Inspiring mentorship",
        text: "Encouraging us to be disciplined and dedicated in our daily habits."
      }
    ],
    finalMessage: "Thank you for being part of my journey and guiding us with wisdom.",
    studentName: "Your students"
  },

  morium: {
    id: "morium",
    name: "Morium Aktar",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your dedicated presence and thoughtful guidance have helped so many of us find our academic rhythm.

Thank you for your endless patience and for always believing in the potential of every single student.`,
    memories: [
      {
        title: "Thoughtful guidance",
        text: "Providing feedback that helped us improve with every assignment."
      },
      {
        title: "Patience and understanding",
        text: "Taking the time to listen and clarify our doubts with care."
      },
      {
        title: "Encouraging spirit",
        text: "Reminding us that dedication will always outshine temporary difficulties."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  sadia: {
    id: "sadia",
    name: "Sadia Jannat",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your gentle encouragement and meticulous care in teaching make every class session rewarding.

Thank you for the effort you put into ensuring no student gets left behind and for being a constant source of inspiration.`,
    memories: [
      {
        title: "Care for every student",
        text: "Noticing when someone was struggling and quietly offering additional help."
      },
      {
        title: "Clear presentation",
        text: "Making learning organized, accessible, and enjoyable."
      },
      {
        title: "Warm positivity",
        text: "Bringing a bright, encouraging energy into our school days."
      }
    ],
    finalMessage: "Thank you for your genuine care and dedication to our education.",
    studentName: "Your students"
  },

  mehedi: {
    id: "mehedi",
    name: "Mehedi Hasan",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Sir.",
    letter: `Your practical insights and energetic demeanor bring freshness to our classroom sessions.

Thank you for challenging us to think deeper, work harder, and approach our studies with earnest curiosity.`,
    memories: [
      {
        title: "Engaging discussions",
        text: "Making everyday topics relevant and engaging through interactive discussions."
      },
      {
        title: "Approachable mentorship",
        text: "Always being accessible when students needed advice or clarification."
      },
      {
        title: "Dedication to growth",
        text: "Pushing us to improve our performance step by step."
      }
    ],
    finalMessage: "Some lessons stay with us long after class ends. Thank you for your mentorship.",
    studentName: "Your students"
  },

  shayla: {
    id: "shayla",
    name: "Shayla Nasreen",
    gender: "female",
    honorific: "Ma'am",
    designation: "Part Time Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Even in the focused time you spend with us, your impact and dedication are felt deeply across our batch.

Thank you for your valuable insights, your high standards, and the generous spirit with which you share your knowledge.`,
    memories: [
      {
        title: "Valuable insights",
        text: "Sharing focused, high-value perspectives that broadened our understanding."
      },
      {
        title: "Efficient instruction",
        text: "Making every minute of class count towards our mastery."
      },
      {
        title: "Warm professional mentorship",
        text: "Treating us with respect and inspiring us to perform with excellence."
      }
    ],
    finalMessage: "Thank you for being part of our educational journey and guiding us with care.",
    studentName: "Your students"
  },

  tanha: {
    id: "tanha",
    name: "Umme Kulsum Tanha",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your warm approach and cheerful spirit make learning feel enjoyable and welcoming.

Thank you for your patience, your helpful guidance, and for bringing enthusiasm to every single lecture.`,
    memories: [
      {
        title: "Cheerful guidance",
        text: "Creating a welcoming environment where learning felt comfortable."
      },
      {
        title: "Attentive support",
        text: "Always taking time to answer questions and ensure everyone understands."
      },
      {
        title: "Inspiring enthusiasm",
        text: "Showing genuine joy in teaching and watching your students succeed."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  farah: {
    id: "farah",
    name: "Farah Ulfat",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your clarity of speech and caring guidance make every session meaningful and memorable.

Thank you for dedicating your time to helping us grow into knowledgeable, confident individuals.`,
    memories: [
      {
        title: "Clear delivery",
        text: "Explaining lessons with articulate clarity that made retention easy."
      },
      {
        title: "Kindness in teaching",
        text: "Approaching every student with genuine compassion and patience."
      },
      {
        title: "Encouraging curiosity",
        text: "Fostering an atmosphere where questions are always welcomed."
      }
    ],
    finalMessage: "Thank you for your kind guidance and dedication to our success.",
    studentName: "Your students"
  },

  plabon: {
    id: "plabon",
    name: "Ashiqur Rahman Plabon",
    gender: "male",
    honorific: "Sir",
    designation: "Assistant Teacher",
    greeting: "Welcome, Sir.",
    letter: `Your approachable demeanor and dedication to student learning make your classes a pleasure to attend.

Thank you for always being ready to help, for bringing practical clarity to our studies, and for encouraging us forward.`,
    memories: [
      {
        title: "Approachable style",
        text: "Making it easy for any student to walk up and ask for guidance."
      },
      {
        title: "Practical examples",
        text: "Using intuitive analogies that simplified complex lessons."
      },
      {
        title: "Steadfast support",
        text: "Always encouraging us to strive for our personal best."
      }
    ],
    finalMessage: "Some lessons stay with us long after class ends. Thank you for being an inspiring guide.",
    studentName: "Your students"
  },

  nazifa: {
    id: "nazifa",
    name: "Mobaschira Nazifa",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your enthusiasm and attention to student progress make your presence in school deeply appreciated.

Thank you for your dedication, your encouraging words, and the cheerful energy you bring into every day.`,
    memories: [
      {
        title: "Enthusiastic teaching",
        text: "The vibrant energy and focus you put into each lecture."
      },
      {
        title: "Supportive atmosphere",
        text: "Creating a classroom where students feel comfortable participating."
      },
      {
        title: "Genuine encouragement",
        text: "Always reminding us that perseverance brings true success."
      }
    ],
    finalMessage: "Thank you for your dedication, kindness, and for inspiring our journey.",
    studentName: "Your students"
  },

  afifa: {
    id: "afifa",
    name: "Afifa Mim",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your warm attitude and thoughtful guidance make your classroom an enjoyable and inspiring place to learn.

Thank you for your constant encouragement, your patience, and for believing in each of us.`,
    memories: [
      {
        title: "Warm encouragement",
        text: "Fostering an open and supportive environment for all students."
      },
      {
        title: "Clear guidance",
        text: "Patiently answering questions until everyone felt secure in their knowledge."
      },
      {
        title: "Positive influence",
        text: "Inspiring us with your dedication and cheerful attitude."
      }
    ],
    finalMessage: "Some lessons are written on a board. Some stay with us long after the class ends. Thank you for being part of my journey.",
    studentName: "Your students"
  },

  mridula: {
    id: "mridula",
    name: "Aria Tasnim Mridula",
    gender: "female",
    honorific: "Ma'am",
    designation: "Assistant Teacher",
    greeting: "Welcome, Ma'am.",
    letter: `Your fresh energy, structured teaching, and kind demeanor make your classes deeply engaging.

Thank you for being so thoughtful with your explanations and for encouraging us to do our very best each day.`,
    memories: [
      {
        title: "Engaging teaching",
        text: "Bringing enthusiasm and clarity to every classroom discussion."
      },
      {
        title: "Thoughtful feedback",
        text: "Helping us learn from our mistakes with warmth and constructive advice."
      },
      {
        title: "Kind dedication",
        text: "Always putting students' understanding and comfort first."
      }
    ],
    finalMessage: "Thank you for your inspiring guidance and for being a wonderful teacher.",
    studentName: "Your students"
  }
};

/**
 * Intelligent teacher lookup:
 * Accepts:
 * - Exact key (e.g., 'moushumi')
 * - Variations (e.g. 'mousumi-akter', 'mousumi', 'nabi', 'sharma')
 * - Case-insensitive & trimmed
 */
export function getTeacher(query: string | null | undefined): TeacherData | null {
  if (!query) return null;
  const clean = query.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!clean) return null;

  // Direct match
  if (teachers[clean]) return teachers[clean];

  // Look for partial key or slug match
  for (const [key, teacher] of Object.entries(teachers)) {
    const keyClean = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nameClean = teacher.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (keyClean === clean || nameClean.includes(clean) || clean.includes(keyClean)) {
      return teacher;
    }
  }

  // Check aliases
  if (clean === 'moushumi' || clean === 'mousumi') return teachers.mousumi || teachers.moushumi;
  if (clean === 'principal' || clean === 'faruk') return teachers.mostofa;
  if (clean === 'viceprincipal' || clean === 'vice') return teachers.nabi;

  return null;
}

/**
 * Resolves respectful title: "Sir" for male educators and "Ma'am" for female educators.
 * Handles explicit properties, fallback names, greetings, and Bengali honorifics.
 */
export function getTeacherHonorific(teacher?: TeacherData | null): "Sir" | "Ma'am" {
  if (!teacher) return "Sir";
  if (teacher.honorific) return teacher.honorific;
  if (teacher.gender === "female") return "Ma'am";
  if (teacher.gender === "male") return "Sir";

  const lowerName = (teacher.name || "").toLowerCase().trim();
  const lowerGreeting = (teacher.greeting || "").toLowerCase().trim();

  // Strong female name and greeting indicators
  if (
    lowerName.startsWith("ms.") ||
    lowerName.startsWith("ms ") ||
    lowerName.startsWith("mrs.") ||
    lowerName.startsWith("mrs ") ||
    lowerName.startsWith("miss ") ||
    lowerGreeting.includes("ma'am") ||
    lowerGreeting.includes("madam") ||
    lowerGreeting.includes("ম্যাম") ||
    /(akter|aktar|jahan|begum|khatun|naher|binte|sharna|jeba|nazifa|afifa|mridula|tanha|mim|sheba|tonima|sumona|shilpi|ana|rimi|mukta|monzila|mousumi|moushumi|sadia|morium|shayla|farah|nusrat|anika|tasnim)/i.test(lowerName)
  ) {
    return "Ma'am";
  }

  // Default to Sir for male educators
  return "Sir";
}
