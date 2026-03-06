import ModulePageTemplate, { ModuleSection, FeatureCard, DataSourceChip } from '../components/ModulePageTemplate'
import AnimatedSection from '../components/AnimatedSection'
import { MessageCircle, Globe, Phone, Mic, Languages, Bot, Smartphone, Radio } from 'lucide-react'

const conversations = [
  {
    lang: 'Kannada',
    messages: [
      { from: 'user', text: 'ನನ್ನ RTC ತೋರಿಸಿ, ಸರ್ವೆ ನಂಬರ್ 45, ಹೊಸಕೋಟೆ' },
      { from: 'bot', text: 'ನಿಮ್ಮ RTC ವಿವರಗಳು:\n📍 ಹೊಸಕೋಟೆ, ಸರ್ವೆ #45\n👤 ಮಾಲೀಕರು: ರಾಮಯ್ಯ ಎಸ್.\n📐 ವಿಸ್ತೀರ್ಣ: 2 ಎಕರೆ 3 ಗುಂಟೆ\n🌾 ಬೆಳೆ: ರಾಗಿ, ಟೊಮೆಟೊ' },
    ]
  },
  {
    lang: 'Hindi',
    messages: [
      { from: 'user', text: 'मेरे लिए कौन सी योजनाएं हैं? मैं 35 साल का किसान हूं, SC category' },
      { from: 'bot', text: 'आपके लिए योजनाएं:\n✅ PM-KISAN: ₹6,000/वर्ष\n✅ KCC: 4% ब्याज पर ऋण\n✅ PMFBY: फसल बीमा\n✅ PMKSY: सिंचाई 55% सब्सिडी\n✅ MGNREGA: 100 दिन रोजगार\n\nविस्तार से जानें? "हां" टाइप करें' },
    ]
  },
  {
    lang: 'English',
    messages: [
      { from: 'user', text: 'My village road work status - Kolar district, Mulbagal taluk' },
      { from: 'bot', text: 'Active works in Mulbagal:\n🛣️ Road: Avani-Mulbagal (PMGSY)\n   Status: 68% complete\n   Sanctioned: ₹1.2 Cr\n\n🏠 Housing: 45 PMAY-G units\n   Status: 32 completed, 13 in progress\n\n💧 SBM: ODF verified ✅\n\nRate this work? Reply with 1-5 ⭐' },
    ]
  },
]

const languages = [
  'Kannada', 'Hindi', 'Telugu', 'Tamil', 'Marathi', 'Bengali',
  'Gujarati', 'Malayalam', 'Punjabi', 'Odia', 'Assamese', 'Urdu'
]

export default function AIAgent() {
  return (
    <ModulePageTemplate
      icon={MessageCircle}
      name="Grama Sahayak"
      subtitle="Ask in Your Language. Get Answers Instantly."
      description="WhatsApp-based AI assistant supporting 12+ Indian languages. Citizens can check land records, find eligible schemes, track public works, and get agricultural advice — all through natural conversation."
    >
      <ModuleSection label="LANGUAGES" title="12+ Indian Languages Supported">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {languages.map(lang => (
              <span key={lang} className="px-4 py-2 bg-bg-card border border-border rounded-full text-sm font-medium text-text-secondary hover:border-saffron/30 hover:text-saffron transition-all">
                {lang}
              </span>
            ))}
          </div>
          <p className="text-text-muted text-sm mt-6">Powered by BHASHINI — India's national language translation platform, ensuring accurate translations across all scheduled languages.</p>
        </AnimatedSection>
      </ModuleSection>

      <ModuleSection label="CONVERSATIONS" title="See It in Action">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conversations.map((conv, i) => (
            <AnimatedSection key={conv.lang} delay={i * 0.1}>
              <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-green/90 px-4 py-3 flex items-center gap-2">
                  <Smartphone size={16} className="text-white" />
                  <span className="text-white text-sm font-semibold">WhatsApp — {conv.lang}</span>
                </div>
                <div className="p-4 space-y-3 min-h-[280px]">
                  {conv.messages.map((msg, j) => (
                    <div key={j} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                        msg.from === 'user'
                          ? 'bg-green/20 text-text-primary rounded-tr-sm'
                          : 'bg-bg-card-hover text-text-secondary rounded-tl-sm'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ModuleSection>

      <ModuleSection label="FEATURES" title="What Citizens Can Do">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Globe} title="Land Record Lookups" description="Check RTC, mutation status, village maps by simply typing the survey number in any supported language." />
          <FeatureCard icon={Bot} title="Scheme Eligibility" description="Get personalized scheme recommendations by answering a few questions about age, income, occupation, and location." />
          <FeatureCard icon={Mic} title="Voice Messages" description="Send voice notes in your language. The AI transcribes, understands, and responds in the same language." />
          <FeatureCard icon={Languages} title="Real-time Translation" description="Seamless translation between user's language and government data using BHASHINI APIs." />
          <FeatureCard icon={Phone} title="IVR Fallback" description="For feature phones and non-smartphone users — dial a number, navigate by pressing keys, hear information read aloud." />
          <FeatureCard icon={Radio} title="USSD Support" description="Even without internet — use USSD codes (*123#) to query basic land and scheme information on any phone." />
        </div>
      </ModuleSection>

      <ModuleSection label="TECHNOLOGY" title="How It Works">
        <AnimatedSection>
          <div className="bg-bg-card border border-border rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'User Message', desc: 'Citizen sends text or voice in any language via WhatsApp' },
                { step: '02', title: 'Translation', desc: 'BHASHINI translates to English. Sarvam AI handles speech-to-text.' },
                { step: '03', title: 'NLU Pipeline', desc: 'Intent detection → entity extraction → database query → response generation' },
                { step: '04', title: 'Response', desc: 'Answer translated back to user\'s language and sent via WhatsApp' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-saffron font-mono font-bold text-2xl mb-2">{item.step}</div>
                  <h4 className="font-heading font-bold text-text-primary mb-2">{item.title}</h4>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </ModuleSection>

      <ModuleSection label="DATA SOURCES" title="Powered By">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            <DataSourceChip name="BHASHINI" url="https://bhashini.gov.in" />
            <DataSourceChip name="Sarvam AI" url="https://sarvam.ai" />
            <DataSourceChip name="WhatsApp Business API" url="https://business.whatsapp.com" />
            <DataSourceChip name="All PublicBook Modules" url="#" />
          </div>
        </AnimatedSection>
      </ModuleSection>
    </ModulePageTemplate>
  )
}
