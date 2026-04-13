export interface Project {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  problem: string;
  systemDesign: string;
  impact: string;
  github: string;
  demo?: string;
  color: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    id: 'elearning-analyzer',
    title: 'Student e-Learning Analyzer',
    tagline: 'Real-time engagement detection for online classrooms',
    techStack: ['OpenCV', 'MediaPipe', 'LSTM', 'Python', 'FastAPI', 'WebSocket'],
    problem:
      'Online learning platforms have no visibility into student engagement. Tutors cannot tell if students are focused, distracted, or losing understanding in real time — leading to passive, ineffective sessions.',
    systemDesign:
      'Built a real-time video pipeline using OpenCV for frame capture and MediaPipe for facial landmark detection (eye gaze, head pose, blink rate). A sliding-window LSTM model classifies engagement states from 30-frame sequences. Predictions stream via WebSocket to a FastAPI backend, which aggregates per-student engagement scores and surfaces heatmaps on a teacher dashboard.',
    impact:
      'Achieved 91% engagement classification accuracy. Enables instructors to intervene in real time when attention drops, improving session outcomes measurably.',
    github: 'https://github.com/niranjana-wq/',
    color: 'from-violet-500 to-purple-600',
    emoji: '🎓',
  },
  {
    id: 'invoice-intelligence',
    title: 'Memory-Driven Invoice Intelligence',
    tagline: 'Enterprise AI with memory-based decision engine and audit trails',
    techStack: ['LangChain', 'LangGraph', 'OpenAI GPT-4', 'PostgreSQL', 'FastAPI', 'Redis'],
    problem:
      'Enterprise invoice processing is manual, error-prone, and lacks institutional memory. Each invoice is processed in isolation — there is no system that learns vendor patterns, flags anomalies based on history, or provides explainable decisions for auditors.',
    systemDesign:
      'Engineered a multi-agent system using LangGraph where a Memory Agent retrieves vendor history from a PostgreSQL vector store, a Validation Agent checks invoice fields against learned patterns, and a Confidence Agent assigns scores with reasoning. Every decision is logged to an immutable audit trail. Redis caches frequent vendor embeddings for sub-100ms retrieval.',
    impact:
      'Reduced manual review time by 70%. Confidence scoring with structured reasoning achieved 94% acceptance by the finance team. Full audit trail satisfies compliance requirements.',
    github: 'https://github.com/niranjana-wq/',
    color: 'from-blue-500 to-cyan-600',
    emoji: '🧠',
  },
  {
    id: 'pneumonia-detection',
    title: 'Pneumonia Detection',
    tagline: 'CNN-based medical image classifier for chest X-rays',
    techStack: ['PyTorch', 'ResNet-50', 'OpenCV', 'Streamlit', 'Docker'],
    problem:
      'Radiologists in resource-limited settings face high volumes of chest X-rays with limited time, leading to delayed or missed pneumonia diagnoses — a condition where early detection is critical.',
    systemDesign:
      'Fine-tuned a ResNet-50 model on the Kaggle Chest X-Ray pneumonia dataset (5,856 images). Applied class-balanced sampling, augmentation (random flip, rotation, contrast), and Grad-CAM visualisations to highlight regions influencing the prediction. Packaged as a Dockerised Streamlit app for easy clinical deployment.',
    impact:
      'Achieved 95.3% test accuracy and 0.97 AUC. Grad-CAM overlays provide interpretable outputs that build clinician trust. Deployable on low-spec hospital hardware.',
    github: 'https://github.com/niranjana-wq/',
    color: 'from-green-500 to-teal-600',
    emoji: '🫁',
  },
  {
    id: 'multimodal-chatbot',
    title: 'Multi-modal Chatbot',
    tagline: 'LLM chatbot with resume analysis and AI interview prep',
    techStack: ['GPT-4o', 'LangChain', 'PyMuPDF', 'React', 'FastAPI', 'FAISS'],
    problem:
      'Job seekers lack access to personalised, context-aware interview preparation. Existing tools use generic questions and fail to adapt to the candidate\'s specific resume, target role, or skill gaps.',
    systemDesign:
      'Built a RAG pipeline where uploaded resumes are parsed with PyMuPDF, chunked, and embedded into a FAISS vector store. A GPT-4o agent retrieves relevant resume sections and generates role-specific interview questions, feedback on answers, and improvement suggestions. Multi-turn memory preserves context across the conversation session.',
    impact:
      'Delivers personalised interview prep with sub-2s response latency. Beta users reported 40% higher confidence scores in mock interviews. Resume gap analysis surfaces actionable skill-building paths.',
    github: 'https://github.com/niranjana-wq/',
    color: 'from-orange-500 to-pink-600',
    emoji: '💬',
  },
  {
    id: 'carecaller-ai',
    title: 'CareCaller AI',
    tagline: 'Real-time AI voice agent for healthcare screening',
    techStack: ['Groq Whisper', 'GPT-4o', 'gTTS', 'Twilio', 'FastAPI', 'Streamlit'],
    problem:
      'Chronic disease management requires frequent patient check-ins that healthcare providers cannot scale manually. Missed follow-ups lead to deteriorating patient outcomes and preventable hospitalisations.',
    systemDesign:
      'Designed a real-time voice agent pipeline: Twilio handles inbound/outbound calls → audio streams to Groq Whisper for low-latency transcription → GPT-4o generates empathetic, clinically-grounded responses → gTTS synthesises audio and streams back. A FastAPI backend orchestrates the pipeline and persists call summaries and flagged risk scores to a database.',
    impact:
      'Supports continuous patient monitoring at scale. Reduces nurse call workload by simulating structured screening conversations with configurable escalation protocols.',
    github: 'https://github.com/niranjana-wq/',
    color: 'from-rose-500 to-red-600',
    emoji: '📞',
  },
  {
    id: 'ai-money-mentor',
    title: 'AI Money Mentor',
    tagline: 'AI financial advisor and wealth planner for Indian users',
    techStack: ['GPT-4', 'LangChain', 'FastAPI', 'React', 'PostgreSQL', 'Chart.js'],
    problem:
      'Most Indians lack access to personalised, affordable financial advice. Generic apps give cookie-cutter recommendations without understanding individual income patterns, goals, or local financial products (SIP, NPS, PPF).',
    systemDesign:
      'Built a financial intelligence engine with five specialised agents: Goal Planning, FIRE Calculation, Investment Allocation, Smart Recommendations, and Scenario Simulation. A Financial Brain orchestrates these agents, maintaining user financial state across sessions. GPT-4 generates natural-language advice grounded in the user\'s actual data.',
    impact:
      'Provides deterministic, goal-aligned financial plans. Monthly snapshot tracking enables trend visualisation. Users can run scenario simulations (salary change, SIP increase) and see long-term wealth impact in real time.',
    github: 'https://github.com/niranjana-wq/',
    demo: 'https://ai-money-mentor.streamlit.app',
    color: 'from-yellow-500 to-amber-600',
    emoji: '💰',
  },
];
