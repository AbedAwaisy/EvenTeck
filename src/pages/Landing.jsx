import { Link } from "react-router-dom"
import { useState } from "react"
import Card from "../components/Card"
import SupplierCard from "../components/SupplierCard"
import { suppliers } from "../data/suppliers"
import logo from "../assets/logo.jpg"

export default function Landing() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "جميع الموردين", icon: "✨", color: "from-amber-400 to-yellow-600" },
    { id: "venue", name: "القاعات", icon: "🏛️", color: "from-amber-500 to-orange-500" },
    { id: "dj", name: "دي جي", icon: "🎧", color: "from-yellow-500 to-amber-500" },
    { id: "cake", name: "حلويات", icon: "🎂", color: "from-red-500 to-rose-500" },
    { id: "photographer", name: "المصورين", icon: "📸", color: "from-amber-600 to-yellow-600" },
    { id: "decor", name: "الديكور", icon: "🎨", color: "from-red-600 to-red-700" },
    { id: "entertainment", name: "الترفيه", icon: "🎪", color: "from-orange-500 to-red-500" }
  ]

  const filteredSuppliers = selectedCategory === "all" 
    ? suppliers 
    : suppliers.filter(supplier => supplier.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-stone-100/95 to-neutral-100/95 backdrop-blur-md shadow-cultural border-b border-stone-200/50 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="EventTak Logo" className="w-16 h-16 rounded-full object-cover shadow-gold" />
              <div>
                <h1 className="text-4xl font-display font-bold text-gradient">EventTak</h1>
                <p className="text-lg font-arabic text-stone-600">تاك - لمسة الخاص بك</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden embroidery-pattern">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50"></div>
        
        {/* Blurred Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img 
              src={logo} 
              alt="EventTak Logo Background" 
              className="w-96 h-96 object-cover rounded-full opacity-25 blur-2xl scale-150"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-50/30 to-neutral-50/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Additional Blurred Logo Elements */}
        <div className="absolute top-1/4 left-1/4">
          <img 
            src={logo} 
            alt="EventTak Logo Accent" 
            className="w-32 h-32 object-cover rounded-full opacity-20 blur-xl scale-125"
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <img 
            src={logo} 
            alt="EventTak Logo Accent" 
            className="w-24 h-24 object-cover rounded-full opacity-15 blur-xl scale-125"
          />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <img 
            src={logo} 
            alt="EventTak Logo Accent" 
            className="w-20 h-20 object-cover rounded-full opacity-15 blur-lg scale-110"
          />
        </div>
        
        {/* Subtle Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-stone-300/15 to-neutral-400/15 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-300/15 to-yellow-400/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-300/15 to-stone-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-neutral-300/15 to-slate-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-stone-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-slate-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-neutral-400 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl font-display font-bold text-stone-900 mb-6 leading-tight">
              <span className="font-arabic text-5xl text-stone-600 block mb-2">أنشئ</span>
              <span className="text-gradient block">ذكريات لا تُنسى</span>
              <span className="font-arabic text-4xl text-stone-600 block mt-2">تاك - لمسة الخاص بك</span>
            </h1>
            <p className="text-xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              اكتشف موردي الأحداث المتميزين، احصل على توصيات مدعومة بالذكاء الاصطناعي، وحقق رؤيتك مع منصتنا الغنية ثقافياً لتخطيط الأحداث.
            </p>
            <div className="flex flex-col items-center mb-12">
              <div className="glass-gold px-8 py-4 rounded-3xl shadow-cultural mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-cultural rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-stone-800">مخطط الأحداث بالذكاء الاصطناعي</p>
                    <p className="text-sm text-stone-600">احصل على توصيات مخصصة</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-stone-500 mb-2">💬 ابحث عن زر المحادثة في الزاوية السفلية اليسرى</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-professional rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-1 h-1 bg-stone-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-gradient-to-r from-stone-100/80 to-neutral-100/80 backdrop-blur-sm py-12 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-stone-900 mb-3">استكشف حسب الفئة</h2>
            <p className="text-stone-600">اعثر على الموردين المثاليين لكل جانب من جوانب حدثك</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center space-x-3 px-6 py-4 rounded-3xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-cultural`
                    : "bg-white/90 text-stone-800 hover:shadow-cultural border border-stone-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Suppliers Section */}
      <div className="py-16 bg-gradient-to-br from-stone-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">
              {selectedCategory === "all" ? "موردين متميزين" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg text-stone-600">
              {filteredSuppliers.length} مورد محترف {filteredSuppliers.length !== 1 ? 'جاهزون' : 'جاهز'} لجعل حدثك استثنائياً
            </p>
          </div>

          {filteredSuppliers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSuppliers.map((supplier, index) => (
                <div
                  key={supplier.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SupplierCard
                    name={supplier.name}
                    rating={supplier.rating}
                    specialty={supplier.specialty}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-cultural rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl">🔍</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">لم يتم العثور على موردين</h3>
              <p className="text-stone-600 mb-8 max-w-md mx-auto">
                جرب اختيار فئة مختلفة أو استخدم مساعد الذكاء الاصطناعي للحصول على توصيات مخصصة.
              </p>
              <div className="flex justify-center">
                <div className="bg-gradient-cultural text-white px-6 py-3 rounded-2xl">
                  <span className="font-medium">💬 اسأل مساعد الذكاء الاصطناعي</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-r from-stone-100 to-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-neutral-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-stone-900 mb-6">
              كيف يعمل
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              ثلاث خطوات بسيطة لإنشاء حدثك المثالي مع موردين محترفين وتخطيط ذكي مدعوم بالذكاء الاصطناعي
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group animate-fade-in-up">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-stone-500 to-neutral-500 rounded-3xl flex items-center justify-center mx-auto shadow-cultural group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🔍</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-cultural rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">اكتشف الموردين</h3>
              <p className="text-stone-600 leading-relaxed">
                تصفح مجموعتنا المختارة بعناية من موردي الأحداث المتميزين. كل شريك يتم فحصه بدقة للجودة وتقييمه من قبل مجتمعنا من مخططي الأحداث المحترفين.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto shadow-cultural group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🤖</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-cultural rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">التخطيط بالذكاء الاصطناعي</h3>
              <p className="text-stone-600 leading-relaxed">
                احصل على توصيات مخصصة من مساعدنا الذكي المتطور. يفهم احتياجاتك بدقة ويطابقك مع الموردين المثاليين لحدثك.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-stone-500 rounded-3xl flex items-center justify-center mx-auto shadow-cultural group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">✨</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-cultural rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">أنشئ السحر</h3>
              <p className="text-stone-600 leading-relaxed">
                احصل على باقة حدثك الكاملة مع تسعير شفاف ومباشر وجميع الموردين الذين تحتاجهم لتحقيق رؤيتك وتحويلها إلى واقع.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}