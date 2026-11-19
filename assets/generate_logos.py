import os
import json

TARGET_DIR = os.path.expanduser(r'~\Downloads\LOGOS 2')
os.makedirs(TARGET_DIR, exist_ok=True)

# List of all 48 brands with their unique visual identity specs
BRANDS = [
    # 1. E-Commerce & Moda Premium
    {
        "id": "01-aether-gear",
        "name": "AETHER GEAR",
        "tagline": "HIGH-PERFORMANCE TECHWEAR & AUDIO",
        "category": "E-Commerce & Moda",
        "theme": "dark",
        "bg": "#0B0D12",
        "grad_from": "#22D3EE",
        "grad_to": "#3B82F6",
        "accent": "#60A5FA",
        "font_family": "system-ui, -apple-system, 'Segoe UI', sans-serif",
        "font_weight": "800",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Techwear Hexagonal Sound/Energy Core -->
                <polygon points="0,-75 65,-38 65,38 0,75 -65,38 -65,-38" fill="none" stroke="url(#grad)" stroke-width="4" stroke-linejoin="round" opacity="0.4"/>
                <polygon points="0,-55 48,-28 48,28 0,55 -48,28 -48,-28" fill="none" stroke="url(#grad)" stroke-width="6" stroke-linejoin="round"/>
                <path d="M-28,-14 L0,0 L28,-14 M-28,14 L0,0 L28,14" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <circle cx="0" cy="0" r="8" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "02-division-89",
        "name": "DIVISION 89",
        "tagline": "HEAVYWEIGHT URBAN APPAREL",
        "category": "E-Commerce & Moda",
        "theme": "dark",
        "bg": "#0D0E11",
        "grad_from": "#F43F5E",
        "grad_to": "#FB923C",
        "accent": "#F43F5E",
        "font_family": "'Impact', 'Arial Black', sans-serif",
        "font_weight": "900",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Brutalist Stencil Badge -->
                <rect x="-65" y="-65" width="130" height="130" rx="12" fill="none" stroke="url(#grad)" stroke-width="7"/>
                <path d="M-40,-35 L-40,35 L10,35 A35,35 0 0,0 10,-35 Z" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linejoin="miter"/>
                <line x1="-65" y1="0" x2="65" y2="0" stroke="url(#grad)" stroke-width="3" stroke-dasharray="8 6"/>
                <circle cx="35" cy="0" r="10" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "03-norden-atelier",
        "name": "NORDEN ATELIER",
        "tagline": "NORDIC WOOD & BESPOKE FURNITURE",
        "category": "E-Commerce & Moda",
        "theme": "dark",
        "bg": "#121415",
        "grad_from": "#E2D9C8",
        "grad_to": "#C2B29A",
        "accent": "#D4C5B0",
        "font_family": "'Georgia', 'Cormorant Garamond', serif",
        "font_weight": "600",
        "tracking": "9px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Scandinavian Geometric Woodgrain / Chair Form -->
                <circle cx="0" cy="0" r="68" fill="none" stroke="url(#grad)" stroke-width="2.5" opacity="0.6"/>
                <path d="M-40,30 L0,-45 L40,30 Z" fill="none" stroke="url(#grad)" stroke-width="4.5" stroke-linejoin="round"/>
                <line x1="-30" y1="12" x2="30" y2="12" stroke="url(#grad)" stroke-width="3.5"/>
                <line x1="0" y1="-45" x2="0" y2="45" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
            </g>
        """
    },
    # 2. Gastronomia, Cafés & Hospitalidade
    {
        "id": "04-kuro-omakase",
        "name": "KURO OMAKASE",
        "tagline": "EXCLUSIVE 16-COURSE JAPANESE DINING",
        "category": "Gastronomia & Hospitalidade",
        "theme": "dark",
        "bg": "#0A0A0C",
        "grad_from": "#FBBF24",
        "grad_to": "#D97706",
        "accent": "#FDE68A",
        "font_family": "'Cinzel', 'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "10px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Japanese Enso Circle & Minimal Knife/Flame -->
                <path d="M -50,-20 A 55,55 0 1,1 25,50" fill="none" stroke="url(#grad)" stroke-width="7" stroke-linecap="round"/>
                <circle cx="35" cy="-30" r="14" fill="#DC2626"/>
                <path d="M-15,20 L0,-35 L15,20 Z" fill="url(#grad)" opacity="0.85"/>
            </g>
        """
    },
    {
        "id": "05-origem-85",
        "name": "ORIGEM 85",
        "tagline": "MICROTORREFAÇÃO & CAFÉS ESPECIAIS",
        "category": "Gastronomia & Hospitalidade",
        "theme": "dark",
        "bg": "#140F0B",
        "grad_from": "#D97706",
        "grad_to": "#92400E",
        "accent": "#F59E0B",
        "font_family": "'Trebuchet MS', 'Segoe UI', sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Coffee Bean Geometric Minimalist Emblem -->
                <ellipse cx="0" cy="0" rx="42" ry="58" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <path d="M0,-54 C25,-20 -25,20 0,54" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <circle cx="-16" cy="-14" r="5" fill="url(#grad)"/>
                <circle cx="16" cy="14" r="5" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "06-vale-das-nuvens",
        "name": "VALE DAS NUVENS",
        "tagline": "LUXURY ECO-RESORT & VILLAS",
        "category": "Gastronomia & Hospitalidade",
        "theme": "dark",
        "bg": "#0D1412",
        "grad_from": "#10B981",
        "grad_to": "#059669",
        "accent": "#34D399",
        "font_family": "'Optima', 'Cormorant Garamond', serif",
        "font_weight": "600",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Mountain Peaks + Mist Cloud Lines -->
                <path d="M-60,35 L-20,-30 L10,15 L35,-15 L60,35 Z" fill="none" stroke="url(#grad)" stroke-width="5" stroke-linejoin="round"/>
                <path d="M-45,45 Q0,25 45,45" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.8"/>
                <circle cx="-20" cy="-45" r="9" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "07-velvet-suites",
        "name": "VELVET SUITES",
        "tagline": "BOUTIQUE LUXURY HOTEL",
        "category": "Gastronomia & Hospitalidade",
        "theme": "dark",
        "bg": "#12090F",
        "grad_from": "#E11D48",
        "grad_to": "#9333EA",
        "accent": "#F43F5E",
        "font_family": "'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Interlocked Elegant V Monogram with Key -->
                <path d="M-45,-45 L0,45 L45,-45" fill="none" stroke="url(#grad)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M-25,-45 L0,15 L25,-45" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
                <circle cx="0" cy="-25" r="7" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "08-horizon-expeditions",
        "name": "HORIZON EXPEDITIONS",
        "tagline": "BESPOKE LUXURY EXPEDITIONS",
        "category": "Gastronomia & Hospitalidade",
        "theme": "dark",
        "bg": "#081018",
        "grad_from": "#38BDF8",
        "grad_to": "#0284C7",
        "accent": "#7DD3FC",
        "font_family": "'Century Gothic', sans-serif",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Compass Rose Star -->
                <circle cx="0" cy="0" r="65" fill="none" stroke="url(#grad)" stroke-width="3" stroke-dasharray="4 6"/>
                <polygon points="0,-65 14,-14 65,0 14,14 0,65 -14,14 -65,0 -14,-14" fill="url(#grad)"/>
                <circle cx="0" cy="0" r="10" fill="#081018" stroke="#FFFFFF" stroke-width="3"/>
            </g>
        """
    },
    # 3. Saúde, Odontologia & Bem-Estar
    {
        "id": "09-lumina-smile",
        "name": "LUMINA SMILE",
        "tagline": "ODONTOLOGIA DIGITAL & ESTÉTICA",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#091217",
        "grad_from": "#06B6D4",
        "grad_to": "#3B82F6",
        "accent": "#67E8F9",
        "font_family": "system-ui, sans-serif",
        "font_weight": "700",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Stylized Tooth / Sparkle Smile Diamond -->
                <path d="M-35,-30 C-50,10 -25,50 0,55 C25,50 50,10 35,-30 C20,-50 -20,-50 -35,-30 Z" fill="none" stroke="url(#grad)" stroke-width="6" stroke-linejoin="round"/>
                <path d="M0,-40 L0,45 M-25,-10 L25,-10" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
                <circle cx="28" cy="-28" r="6" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "10-nexus-medicina",
        "name": "NEXUS MEDICINA",
        "tagline": "CENTRO MÉDICO & CHECK-UP EXECUTIVO",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#0B131E",
        "grad_from": "#3B82F6",
        "grad_to": "#10B981",
        "accent": "#60A5FA",
        "font_family": "'Segoe UI', sans-serif",
        "font_weight": "800",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Medical Cross with Digital Connectivity Rings -->
                <rect x="-16" y="-55" width="32" height="110" rx="8" fill="url(#grad)"/>
                <rect x="-55" y="-16" width="110" height="32" rx="8" fill="url(#grad)"/>
                <circle cx="0" cy="0" r="14" fill="#0B131E" stroke="#FFFFFF" stroke-width="4"/>
                <circle cx="0" cy="0" r="5" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "11-derma-reveal",
        "name": "DERMA REVEAL",
        "tagline": "ESTÉTICA AVANÇADA & LASER",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#140F11",
        "grad_from": "#F472B6",
        "grad_to": "#FB7185",
        "accent": "#FBCFE8",
        "font_family": "'Bodoni MT', 'Didot', serif",
        "font_weight": "600",
        "tracking": "9px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Radiating Laser Blossom / Pure Drop -->
                <circle cx="0" cy="0" r="58" fill="none" stroke="url(#grad)" stroke-width="2" stroke-dasharray="2 4"/>
                <path d="M0,-50 C30,-15 30,25 0,50 C-30,25 -30,-15 0,-50 Z" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <ellipse cx="0" cy="5" rx="12" ry="24" fill="url(#grad)" opacity="0.4"/>
                <circle cx="0" cy="5" r="6" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "12-mente-e-fluxo",
        "name": "MENTE & FLUXO",
        "tagline": "PSICOLOGIA CLÍNICA BASEADA EM EVIDÊNCIAS",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#0D1615",
        "grad_from": "#14B8A6",
        "grad_to": "#0D9488",
        "accent": "#5EEAD4",
        "font_family": "'Avenir', 'Segoe UI', sans-serif",
        "font_weight": "600",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Infinity Balance & Head Wave -->
                <path d="M-40,0 C-40,-30 0,-30 0,0 C0,30 40,30 40,0 C40,-30 0,-30 0,0 C0,30 -40,30 -40,0 Z" fill="none" stroke="url(#grad)" stroke-width="6" stroke-linecap="round"/>
                <circle cx="0" cy="-35" r="9" fill="url(#grad)"/>
                <circle cx="0" cy="0" r="5" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "13-sanctuary-spa",
        "name": "SANCTUARY SPA",
        "tagline": "MASSAGENS TERAPÊUTICAS & OFURÔ",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#121411",
        "grad_from": "#A3E635",
        "grad_to": "#65A30D",
        "accent": "#BEF264",
        "font_family": "'Optima', serif",
        "font_weight": "600",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Zen Balance Stones & Water Ripple -->
                <ellipse cx="0" cy="35" rx="55" ry="16" fill="none" stroke="url(#grad)" stroke-width="4"/>
                <ellipse cx="0" cy="10" rx="40" ry="14" fill="url(#grad)" opacity="0.6"/>
                <ellipse cx="0" cy="-12" rx="26" ry="11" fill="url(#grad)" opacity="0.85"/>
                <circle cx="0" cy="-32" r="10" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "14-pet-majesty",
        "name": "PET MAJESTY",
        "tagline": "BOUTIQUE, SPA & ESTÉTICA PET",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#151017",
        "grad_from": "#C084FC",
        "grad_to": "#A855F7",
        "accent": "#E9D5FF",
        "font_family": "'Segoe UI', sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Royal Crown + Paw Print -->
                <path d="M-35,-25 L-45,-45 L-20,-35 L0,-55 L20,-35 L45,-45 L35,-25 Z" fill="url(#grad)"/>
                <ellipse cx="0" cy="18" rx="26" ry="20" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <circle cx="-24" cy="-2" r="8" fill="url(#grad)"/>
                <circle cx="-9" cy="-14" r="9" fill="url(#grad)"/>
                <circle cx="9" cy="-14" r="9" fill="url(#grad)"/>
                <circle cx="24" cy="-2" r="8" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "15-vet-life-24h",
        "name": "VET LIFE 24H",
        "tagline": "HOSPITAL VETERINÁRIO & EMERGÊNCIA",
        "category": "Saúde & Estética",
        "theme": "dark",
        "bg": "#0D171A",
        "grad_from": "#2DD4BF",
        "grad_to": "#0284C7",
        "accent": "#5EEAD4",
        "font_family": "'Segoe UI', sans-serif",
        "font_weight": "800",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Heart + ECG Pulse + Paw in Center -->
                <path d="M0,45 C-55,10 -55,-35 0,-25 C55,-35 55,10 0,45 Z" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <path d="M-40,5 L-15,5 L-5,-15 L5,20 L15,5 L40,5" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="0" cy="-35" r="6" fill="url(#grad)"/>
            </g>
        """
    },
    # 4. Jurídico, Finanças & Consultoria
    {
        "id": "16-oliveira-associados",
        "name": "OLIVEIRA & ASSOCIADOS",
        "tagline": "CORPORATE LAW & PRIVATE EQUITY",
        "category": "Jurídico & Finanças",
        "theme": "dark",
        "bg": "#0B0E14",
        "grad_from": "#F59E0B",
        "grad_to": "#B45309",
        "accent": "#FCD34D",
        "font_family": "'Cinzel', 'Trajan Pro', serif",
        "font_weight": "700",
        "tracking": "9px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Geometric Scales of Justice & Column Monogram -->
                <line x1="-50" y1="-25" x2="50" y2="-25" stroke="url(#grad)" stroke-width="5" stroke-linecap="round"/>
                <line x1="0" y1="-45" x2="0" y2="45" stroke="url(#grad)" stroke-width="5" stroke-linecap="round"/>
                <path d="M-50,-25 L-30,15 L-70,15 Z" fill="none" stroke="#FFFFFF" stroke-width="3.5"/>
                <path d="M50,-25 L70,15 L30,15 Z" fill="none" stroke="#FFFFFF" stroke-width="3.5"/>
                <rect x="-30" y="45" width="60" height="10" rx="3" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "17-contaflow",
        "name": "CONTAFLOW",
        "tagline": "CONTABILIDADE CONSULTIVA & BPO FISCAL",
        "category": "Jurídico & Finanças",
        "theme": "dark",
        "bg": "#0A1118",
        "grad_from": "#0284C7",
        "grad_to": "#10B981",
        "accent": "#38BDF8",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Ascending Growth Loops & Hexagon -->
                <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="url(#grad)" stroke-width="4.5"/>
                <path d="M-30,20 L-10,0 L10,12 L30,-22" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <polygon points="30,-32 32,-15 17,-22" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "18-apex-consulting",
        "name": "APEX CONSULTING",
        "tagline": "GESTÃO ESTRATÉGICA & EXPANSÃO EBITDA",
        "category": "Jurídico & Finanças",
        "theme": "dark",
        "bg": "#0E1015",
        "grad_from": "#6366F1",
        "grad_to": "#4F46E5",
        "accent": "#A5B4FC",
        "font_family": "'Century Gothic', sans-serif",
        "font_weight": "800",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Forward Chevron Apex Triangles -->
                <polygon points="0,-60 45,30 25,30 0,-20 -25,30 -45,30" fill="url(#grad)"/>
                <polygon points="0,-20 25,30 -25,30" fill="#FFFFFF" opacity="0.9"/>
                <circle cx="0" cy="45" r="6" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "19-pulse-pay",
        "name": "PULSE PAY",
        "tagline": "GLOBAL CURRENCY & LIQUID FINTECH",
        "category": "Jurídico & Finanças",
        "theme": "dark",
        "bg": "#09090E",
        "grad_from": "#06B6D4",
        "grad_to": "#D946EF",
        "accent": "#22D3EE",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Continuous Liquid Wave Infinity Ring -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <path d="M-35,0 Q-15,-30 0,0 T35,0" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <circle cx="-15" cy="-8" r="5" fill="#22D3EE"/>
                <circle cx="15" cy="8" r="5" fill="#D946EF"/>
            </g>
        """
    },
    # 5. Imobiliário, Arquitetura & Engenharia
    {
        "id": "20-prime-villas",
        "name": "PRIME VILLAS",
        "tagline": "LUXURY REAL ESTATE & PENTHOUSES",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#0C0F14",
        "grad_from": "#E5E7EB",
        "grad_to": "#9CA3AF",
        "accent": "#D1D5DB",
        "font_family": "'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "9px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Architectural Penthouse Lines & Cantilever -->
                <polygon points="0,-55 55,-15 55,45 -55,45 -55,-15" fill="none" stroke="url(#grad)" stroke-width="4.5"/>
                <line x1="-55" y1="5" x2="55" y2="5" stroke="url(#grad)" stroke-width="3.5"/>
                <line x1="0" y1="-55" x2="0" y2="45" stroke="#FFFFFF" stroke-width="3"/>
                <circle cx="0" cy="-20" r="7" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "21-studio-arq-89",
        "name": "STUDIO ARQ 89",
        "tagline": "ARQUITETURA AUTORAL & DESIGN EDITORIAL",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#141414",
        "grad_from": "#D4AF37",
        "grad_to": "#AA7C11",
        "accent": "#F3E5AB",
        "font_family": "'Cormorant Garamond', 'Times New Roman', serif",
        "font_weight": "600",
        "tracking": "10px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Blueprint Compass Angle & Minimal Arch -->
                <path d="M-45,45 A 45,45 0 0,1 45,45" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <line x1="-45" y1="45" x2="0" y2="-45" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                <line x1="45" y1="45" x2="0" y2="-45" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                <circle cx="0" cy="-45" r="7" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "22-vertice-construtora",
        "name": "VÉRTICE",
        "tagline": "INCORPORAÇÃO & EMPREENDIMENTOS VERTICAIS",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#0D1117",
        "grad_from": "#2563EB",
        "grad_to": "#1D4ED8",
        "accent": "#60A5FA",
        "font_family": "system-ui, sans-serif",
        "font_weight": "900",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Vertical Skyline Monogram Triangle -->
                <polygon points="0,-60 50,40 -50,40" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <rect x="-12" y="-15" width="24" height="55" fill="url(#grad)"/>
                <rect x="-30" y="10" width="14" height="30" fill="#FFFFFF"/>
                <rect x="16" y="10" width="14" height="30" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "23-bim-struct",
        "name": "BIM STRUCT",
        "tagline": "CÁLCULO ESTRUTURAL & ENGENHARIA BIM",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#0D131A",
        "grad_from": "#0284C7",
        "grad_to": "#0369A1",
        "accent": "#38BDF8",
        "font_family": "'Consolas', monospace",
        "font_weight": "700",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- 3D Isometric Steel Truss Cube -->
                <polygon points="0,-50 45,-25 45,25 0,50 -45,25 -45,-25" fill="none" stroke="url(#grad)" stroke-width="4.5"/>
                <line x1="0" y1="0" x2="0" y2="50" stroke="url(#grad)" stroke-width="4"/>
                <line x1="0" y1="0" x2="45" y2="-25" stroke="url(#grad)" stroke-width="4"/>
                <line x1="0" y1="0" x2="-45" y2="-25" stroke="url(#grad)" stroke-width="4"/>
                <circle cx="0" cy="0" r="7" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "24-solaris-energia",
        "name": "SOLARIS ENERGIA",
        "tagline": "USINAS SOLARES & ENGENHARIA FOTOVOLTAICA",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#12110D",
        "grad_from": "#F59E0B",
        "grad_to": "#EAB308",
        "accent": "#FDE047",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Sun + Solar Cell Grid Shield -->
                <circle cx="0" cy="0" r="30" fill="url(#grad)"/>
                <g stroke="#FFFFFF" stroke-width="3" stroke-linecap="round">
                    <line x1="0" y1="-50" x2="0" y2="-38"/>
                    <line x1="0" y1="38" x2="0" y2="50"/>
                    <line x1="-50" y1="0" x2="-38" y2="0"/>
                    <line x1="38" y1="0" x2="50" y2="0"/>
                    <line x1="-35" y1="-35" x2="-26" y2="-26"/>
                    <line x1="26" y1="26" x2="35" y2="35"/>
                    <line x1="35" y1="-35" x2="26" y2="-26"/>
                    <line x1="-26" y1="26" x2="-35" y2="35"/>
                </g>
                <line x1="-18" y1="0" x2="18" y2="0" stroke="#000000" stroke-width="3"/>
                <line x1="0" y1="-18" x2="0" y2="18" stroke="#000000" stroke-width="3"/>
            </g>
        """
    },
    {
        "id": "25-prime-clean",
        "name": "PRIME CLEAN",
        "tagline": "FACILITIES & LIMPEZA TÉCNICA PÓS-OBRA",
        "category": "Imobiliário & Engenharia",
        "theme": "dark",
        "bg": "#0B151C",
        "grad_from": "#38BDF8",
        "grad_to": "#0EA5E9",
        "accent": "#7DD3FC",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Sparkle Diamond & Pure Droplet -->
                <path d="M0,-55 L16,-16 L55,0 L16,16 L0,55 L-16,16 L-55,0 L-16,-16 Z" fill="url(#grad)"/>
                <circle cx="0" cy="0" r="9" fill="#FFFFFF"/>
                <circle cx="35" cy="-35" r="7" fill="#38BDF8"/>
            </g>
        """
    },
    # 6. Automotivo, Indústria & Logística
    {
        "id": "26-veloce-motors",
        "name": "VELOCE MOTORS",
        "tagline": "SUPERESPORTIVOS & BLINDADOS",
        "category": "Automotivo & Indústria",
        "theme": "dark",
        "bg": "#0F0B0C",
        "grad_from": "#EF4444",
        "grad_to": "#B91C1C",
        "accent": "#F87171",
        "font_family": "'Impact', 'Arial Black', sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Aerodynamic Shield & Speed Wing -->
                <path d="M0,-55 L50,-25 L35,35 L0,55 L-35,35 L-50,-25 Z" fill="none" stroke="url(#grad)" stroke-width="6" stroke-linejoin="round"/>
                <path d="M-30,5 L0,-25 L30,5 L0,30 Z" fill="url(#grad)"/>
                <circle cx="0" cy="5" r="6" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "27-cargomax",
        "name": "CARGOMAX",
        "tagline": "OPERADOR LOGÍSTICO & TRANSPORTE EXPRESSO",
        "category": "Automotivo & Indústria",
        "theme": "dark",
        "bg": "#121210",
        "grad_from": "#EAB308",
        "grad_to": "#CA8A04",
        "accent": "#FACC15",
        "font_family": "system-ui, sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Fast Dynamic Forward Arrow Box -->
                <rect x="-50" y="-35" width="100" height="70" rx="10" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <polygon points="-15,-20 15,0 -15,20" fill="url(#grad)"/>
                <polygon points="10,-20 35,0 10,20" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "28-precision-cnc",
        "name": "PRECISION CNC",
        "tagline": "USINAGEM DE PRECISÃO & CALDEIRARIA PESADA",
        "category": "Automotivo & Indústria",
        "theme": "dark",
        "bg": "#0D1115",
        "grad_from": "#94A3B8",
        "grad_to": "#64748B",
        "accent": "#CBD5E1",
        "font_family": "'Courier New', monospace",
        "font_weight": "700",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Industrial Gear & Caliper Crosshair -->
                <circle cx="0" cy="0" r="45" fill="none" stroke="url(#grad)" stroke-width="8"/>
                <line x1="-60" y1="0" x2="60" y2="0" stroke="#FFFFFF" stroke-width="4"/>
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#FFFFFF" stroke-width="4"/>
                <circle cx="0" cy="0" r="16" fill="url(#grad)"/>
                <circle cx="0" cy="0" r="6" fill="#0D1115"/>
            </g>
        """
    },
    # 7. Criatividade, Mídia, Fotografia & Lifestyle
    {
        "id": "29-studio-matrix",
        "name": "STUDIO MATRIX",
        "tagline": "CREATIVE GROWTH & BRANDING AGENCY",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0B0B0E",
        "grad_from": "#A855F7",
        "grad_to": "#EC4899",
        "accent": "#C084FC",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Swiss Modernist Gradient Matrix Nodes -->
                <rect x="-45" y="-45" width="35" height="35" rx="8" fill="url(#grad)"/>
                <rect x="10" y="-45" width="35" height="35" rx="8" fill="#FFFFFF"/>
                <rect x="-45" y="10" width="35" height="35" rx="8" fill="#FFFFFF"/>
                <rect x="10" y="10" width="35" height="35" rx="8" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "30-lumiere-photo",
        "name": "LUMIÈRE",
        "tagline": "FINE ART & EDITORIAL PHOTOGRAPHY",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0D0D0E",
        "grad_from": "#E2E8F0",
        "grad_to": "#94A3B8",
        "accent": "#F8FAFC",
        "font_family": "'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "10px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Camera Lens Aperture Blades -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="4"/>
                <path d="M-25,-45 L40,-20 M45,-20 L25,45 M25,45 L-40,25 M-40,25 L-25,-45" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
                <circle cx="0" cy="0" r="12" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "31-stage-live",
        "name": "STAGE LIVE",
        "tagline": "PRODUÇÃO EXECUTIVA DE SHOWS & EVENTOS",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#120B16",
        "grad_from": "#D946EF",
        "grad_to": "#8B5CF6",
        "accent": "#E879F9",
        "font_family": "system-ui, sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Stage Spotlights & Sound Frequency Beams -->
                <polygon points="0,-60 50,45 -50,45" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <line x1="0" y1="-60" x2="0" y2="45" stroke="#FFFFFF" stroke-width="3"/>
                <line x1="-30" y1="45" x2="0" y2="-60" stroke="url(#grad)" stroke-width="3"/>
                <line x1="30" y1="45" x2="0" y2="-60" stroke="url(#grad)" stroke-width="3"/>
                <circle cx="0" cy="-60" r="9" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "32-framework-filmes",
        "name": "FRAMEWORK FILMES",
        "tagline": "CINEMATOGRAFIA & PÓS-PRODUÇÃO",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0D0D11",
        "grad_from": "#F43F5E",
        "grad_to": "#BE123C",
        "accent": "#FB7185",
        "font_family": "'Courier New', monospace",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Cinema Clapperboard / Frame Crop Bracket -->
                <rect x="-55" y="-35" width="110" height="75" rx="6" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <polygon points="-12,-18 20,2 -12,22" fill="#FFFFFF"/>
                <circle cx="40" cy="-20" r="4" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "33-the-barber-club",
        "name": "THE BARBER CLUB",
        "tagline": "BARBEARIA TRADICIONAL & VISAGISMO",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#120F0D",
        "grad_from": "#F59E0B",
        "grad_to": "#B45309",
        "accent": "#FDE68A",
        "font_family": "'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Crossed Razors / Traditional Scissors Shield -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="3.5"/>
                <line x1="-38" y1="-38" x2="38" y2="38" stroke="url(#grad)" stroke-width="5" stroke-linecap="round"/>
                <line x1="38" y1="-38" x2="-38" y2="38" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <circle cx="0" cy="0" r="10" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "34-black-needle",
        "name": "BLACK NEEDLE",
        "tagline": "ART TATTOO & BODY ART CONCEPT",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0A0A0A",
        "grad_from": "#E2E8F0",
        "grad_to": "#64748B",
        "accent": "#FFFFFF",
        "font_family": "'Cinzel', serif",
        "font_weight": "700",
        "tracking": "9px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Geometric Tattoo Needle & Sacred Hexagram Motif -->
                <polygon points="0,-60 14,-15 55,0 14,15 0,60 -14,15 -55,0 -14,-15" fill="none" stroke="url(#grad)" stroke-width="4"/>
                <circle cx="0" cy="0" r="16" fill="url(#grad)"/>
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#000000" stroke-width="3"/>
            </g>
        """
    },
    {
        "id": "35-neon-horizon",
        "name": "NEON HORIZON",
        "tagline": "SYNTHWAVE MUSIC & RECORD LABEL",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0D0714",
        "grad_from": "#F43F5E",
        "grad_to": "#8B5CF6",
        "accent": "#38BDF8",
        "font_family": "'Impact', sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- 80s Retrowave Segmented Sun & Horizon -->
                <circle cx="0" cy="0" r="50" fill="url(#grad)"/>
                <line x1="-50" y1="-5" x2="50" y2="-5" stroke="#0D0714" stroke-width="5"/>
                <line x1="-50" y1="10" x2="50" y2="10" stroke="#0D0714" stroke-width="6"/>
                <line x1="-50" y1="25" x2="50" y2="25" stroke="#0D0714" stroke-width="8"/>
                <polygon points="-55,42 0,15 55,42" fill="#38BDF8"/>
            </g>
        """
    },
    {
        "id": "36-iron-core-gym",
        "name": "IRON CORE GYM",
        "tagline": "TREINAMENTO FUNCIONAL & ALTA PERFORMANCE",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#12100E",
        "grad_from": "#F97316",
        "grad_to": "#EA580C",
        "accent": "#FB923C",
        "font_family": "'Arial Black', sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Barbell Plate & Iron Link -->
                <circle cx="0" cy="0" r="52" fill="none" stroke="url(#grad)" stroke-width="9"/>
                <circle cx="0" cy="0" r="26" fill="url(#grad)"/>
                <line x1="-65" y1="0" x2="65" y2="0" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
                <circle cx="0" cy="0" r="8" fill="#12100E"/>
            </g>
        """
    },
    {
        "id": "37-aurea-atelier",
        "name": "AUREA ATELIER",
        "tagline": "GOLD MASK & SURREAL ART DIRECTION",
        "category": "Criatividade & Mídia",
        "theme": "dark",
        "bg": "#0D0C0A",
        "grad_from": "#FDE047",
        "grad_to": "#CA8A04",
        "accent": "#FEF08A",
        "font_family": "'Playfair Display', serif",
        "font_weight": "700",
        "tracking": "10px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Golden Sculpted Mask Silhouette -->
                <path d="M0,-55 C35,-55 45,-15 35,25 C25,55 0,55 0,55 C0,55 -25,55 -35,25 C-45,-15 -35,-55 0,-55 Z" fill="url(#grad)"/>
                <ellipse cx="-14" cy="-8" rx="8" ry="4" fill="#0D0C0A"/>
                <ellipse cx="14" cy="-8" rx="8" ry="4" fill="#0D0C0A"/>
                <line x1="0" y1="-5" x2="0" y2="18" stroke="#0D0C0A" stroke-width="3"/>
                <line x1="-10" y1="30" x2="10" y2="30" stroke="#0D0C0A" stroke-width="3"/>
            </g>
        """
    },
    # 8. Startups, Tecnologia & SaaS
    {
        "id": "38-hyperion-academy",
        "name": "HYPERION ACADEMY",
        "tagline": "MENTORIA & FORMAÇÃO PRÁTICA EM I.A.",
        "category": "Tecnologia & SaaS",
        "theme": "dark",
        "bg": "#0B111A",
        "grad_from": "#38BDF8",
        "grad_to": "#6366F1",
        "accent": "#818CF8",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Open Tech Knowledge Prism / Neural Book -->
                <polygon points="0,-55 48,-25 0,5 -48,-25" fill="url(#grad)"/>
                <polygon points="0,5 48,-25 48,25 0,55" fill="#6366F1"/>
                <polygon points="0,5 -48,-25 -48,25 0,55" fill="#38BDF8"/>
                <circle cx="0" cy="5" r="7" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "39-flowgate-ai",
        "name": "FLOWGATE AI",
        "tagline": "HIGH-PERFORMANCE MODEL GATEWAY",
        "category": "Tecnologia & SaaS",
        "theme": "dark",
        "bg": "#08090D",
        "grad_from": "#22D3EE",
        "grad_to": "#A855F7",
        "accent": "#C084FC",
        "font_family": "'JetBrains Mono', monospace",
        "font_weight": "700",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Gateway Portal with Central Quantum Core -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="4" stroke-dasharray="8 6"/>
                <rect x="-24" y="-24" width="48" height="48" rx="10" fill="url(#grad)" transform="rotate(45)"/>
                <circle cx="0" cy="0" r="9" fill="#08090D"/>
                <circle cx="0" cy="0" r="4" fill="#FFFFFF"/>
            </g>
        """
    },
    # 9. Aplicações Web Próprias (Apps & Games)
    {
        "id": "40-radar-ia",
        "name": "RADAR IA",
        "tagline": "OBSERVATÓRIO GLOBAL DE MODELOS DE I.A.",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#060A10",
        "grad_from": "#06B6D4",
        "grad_to": "#3B82F6",
        "accent": "#22D3EE",
        "font_family": "system-ui, sans-serif",
        "font_weight": "900",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Concentric Radar Sweeper Rings + Target Blip -->
                <circle cx="0" cy="0" r="58" fill="none" stroke="url(#grad)" stroke-width="2.5" opacity="0.4"/>
                <circle cx="0" cy="0" r="40" fill="none" stroke="url(#grad)" stroke-width="3.5" opacity="0.7"/>
                <circle cx="0" cy="0" r="22" fill="none" stroke="url(#grad)" stroke-width="4.5"/>
                <line x1="0" y1="0" x2="42" y2="-42" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
                <circle cx="28" cy="-28" r="6" fill="#22D3EE"/>
                <circle cx="0" cy="0" r="5" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "41-prompt-studio",
        "name": "PROMPT STUDIO",
        "tagline": "VISUAL PROMPT ENGINEERING SUITE",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#0B0812",
        "grad_from": "#E879F9",
        "grad_to": "#8B5CF6",
        "accent": "#F0ABFC",
        "font_family": "'JetBrains Mono', monospace",
        "font_weight": "700",
        "tracking": "6px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Terminal Command Prompt & Sparkle Lens -->
                <rect x="-50" y="-35" width="100" height="70" rx="12" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <path d="M-30,-10 L-15,0 L-30,10" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="-5" y1="10" x2="20" y2="10" stroke="url(#grad)" stroke-width="5" stroke-linecap="round"/>
                <circle cx="30" cy="-15" r="5" fill="#E879F9"/>
            </g>
        """
    },
    {
        "id": "42-ivfr-global",
        "name": "IVFR GLOBAL",
        "tagline": "ÍNDICE DE VIABILIDADE ECONÔMICA REAL",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#091211",
        "grad_from": "#10B981",
        "grad_to": "#059669",
        "accent": "#34D399",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Global Globe Grid + Currency Barometer -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="4.5"/>
                <ellipse cx="0" cy="0" rx="25" ry="55" fill="none" stroke="url(#grad)" stroke-width="3.5"/>
                <line x1="-55" y1="0" x2="55" y2="0" stroke="url(#grad)" stroke-width="3"/>
                <circle cx="18" cy="-18" r="8" fill="#FFFFFF"/>
            </g>
        """
    },
    {
        "id": "43-patrimonio-pro",
        "name": "PATRIMÔNIO PRO",
        "tagline": "SIMULADOR FINANCEIRO DE JUROS COMPOSTOS",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#091018",
        "grad_from": "#3B82F6",
        "grad_to": "#1D4ED8",
        "accent": "#60A5FA",
        "font_family": "system-ui, sans-serif",
        "font_weight": "800",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Compound Interest Exponential Curved Graph -->
                <polygon points="-45,35 45,35 45,-30" fill="url(#grad)" opacity="0.3"/>
                <path d="M-45,35 Q10,30 45,-30" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
                <circle cx="45" cy="-30" r="9" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "44-music-atlas",
        "name": "MUSIC ATLAS",
        "tagline": "LISTENING ROOM & LOSSLESS STREAMING PWA",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#120815",
        "grad_from": "#EC4899",
        "grad_to": "#8B5CF6",
        "accent": "#F472B6",
        "font_family": "'Century Gothic', sans-serif",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Audio Waveform + Vinyl Grooves -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <circle cx="0" cy="0" r="35" fill="none" stroke="url(#grad)" stroke-width="2.5" opacity="0.6"/>
                <path d="M-20,15 L-20,-15 L15,-30 L15,0" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="-20" cy="15" r="9" fill="#EC4899"/>
                <circle cx="15" cy="0" r="9" fill="#8B5CF6"/>
            </g>
        """
    },
    {
        "id": "45-game-atlas",
        "name": "GAME ATLAS",
        "tagline": "PLAYER JOURNAL & GAMER BACKLOG HUB",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#0D0A16",
        "grad_from": "#8B5CF6",
        "grad_to": "#6D28D9",
        "accent": "#A78BFA",
        "font_family": "'Impact', sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- D-Pad Game Controller Geometric Crest -->
                <rect x="-55" y="-30" width="110" height="60" rx="16" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <path d="M-30,-12 L-30,12 M-42,0 L-18,0" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
                <circle cx="20" cy="5" r="5" fill="#A78BFA"/>
                <circle cx="35" cy="-5" r="5" fill="#A78BFA"/>
            </g>
        """
    },
    {
        "id": "46-cinematheque-atlas",
        "name": "CINEMATHEQUE ATLAS",
        "tagline": "CURATED FILM ACERVO & DIÁRIO DE CINEMA",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#0C0C0E",
        "grad_from": "#E2E8F0",
        "grad_to": "#94A3B8",
        "accent": "#F8FAFC",
        "font_family": "'Cinzel', serif",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Film Reel 35mm Holes Crest -->
                <circle cx="0" cy="0" r="55" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <circle cx="0" cy="0" r="18" fill="url(#grad)"/>
                <circle cx="0" cy="-32" r="7" fill="#0C0C0E"/>
                <circle cx="0" cy="32" r="7" fill="#0C0C0E"/>
                <circle cx="-32" cy="0" r="7" fill="#0C0C0E"/>
                <circle cx="32" cy="0" r="7" fill="#0C0C0E"/>
            </g>
        """
    },
    {
        "id": "47-bookshelf-atlas",
        "name": "BOOKSHELF ATLAS",
        "tagline": "PERSONAL LITERARY ARCHIVE & READING DIARY",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#120E0D",
        "grad_from": "#D97706",
        "grad_to": "#B45309",
        "accent": "#FDE68A",
        "font_family": "'Cormorant Garamond', serif",
        "font_weight": "700",
        "tracking": "8px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Open Book & Bookmark Ribbon -->
                <path d="M0,35 C-25,20 -50,25 -50,25 L-50,-35 C-50,-35 -25,-40 0,-25 C25,-40 50,-35 50,-35 L50,25 C50,25 25,20 0,35 Z" fill="none" stroke="url(#grad)" stroke-width="5"/>
                <line x1="0" y1="-25" x2="0" y2="45" stroke="#FFFFFF" stroke-width="4"/>
                <polygon points="0,5 12,20 0,15" fill="url(#grad)"/>
            </g>
        """
    },
    {
        "id": "48-neon-synapse",
        "name": "NEON SYNAPSE",
        "tagline": "TACTICAL CYBERPUNK CARD GAME",
        "category": "Aplicações & Games",
        "theme": "dark",
        "bg": "#090611",
        "grad_from": "#22D3EE",
        "grad_to": "#D946EF",
        "accent": "#38BDF8",
        "font_family": "'Impact', 'Arial Black', sans-serif",
        "font_weight": "900",
        "tracking": "7px",
        "symbol_svg": """
            <g transform="translate(400, 220)">
                <!-- Cyberpunk Card Deck & Circuit Pulse -->
                <polygon points="0,-60 48,-32 48,32 0,60 -48,32 -48,-32" fill="none" stroke="url(#grad)" stroke-width="6"/>
                <rect x="-24" y="-34" width="48" height="68" rx="6" fill="#090611" stroke="#FFFFFF" stroke-width="3"/>
                <path d="M-10,-10 L10,10 M10,-10 L-10,10" stroke="url(#grad)" stroke-width="4"/>
                <circle cx="0" cy="0" r="5" fill="#22D3EE"/>
            </g>
        """
    }
]

print(f"Total brands to generate: {len(BRANDS)}")

# Generate SVG files
for b in BRANDS:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{b['grad_from']}"/>
      <stop offset="100%" stop-color="{b['grad_to']}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="{b['grad_from']}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="{b['grad_from']}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="{b['grad_from']}" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="{b['bg']}"/>
  <rect width="800" height="600" fill="url(#glow)"/>

  <!-- Border Frame -->
  <rect x="24" y="24" width="752" height="552" rx="24" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>

  <!-- Symbol -->
  <g filter="url(#shadow)">
    {b['symbol_svg']}
  </g>

  <!-- Brand Typography Lockup -->
  <g text-anchor="middle">
    <!-- Logotype -->
    <text x="400" y="380" 
          font-family="{b['font_family']}" 
          font-size="34" 
          font-weight="{b['font_weight']}" 
          letter-spacing="{b['tracking']}" 
          fill="#FFFFFF">
      {b['name']}
    </text>

    <!-- Tagline -->
    <text x="400" y="420" 
          font-family="system-ui, -apple-system, sans-serif" 
          font-size="11" 
          font-weight="600" 
          letter-spacing="4px" 
          fill="{b['accent']}" 
          opacity="0.9">
      {b['tagline']}
    </text>

    <!-- Category Pill -->
    <rect x="310" y="465" width="180" height="26" rx="13" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="400" y="482" 
          font-family="system-ui, sans-serif" 
          font-size="10" 
          font-weight="600" 
          letter-spacing="2px" 
          fill="#94A3B8">
      {b['category'].upper()}
    </text>
  </g>
</svg>'''

    file_path = os.path.join(TARGET_DIR, f"{b['id']}.svg")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(svg_content.strip())

print(f"Successfully generated {len(BRANDS)} SVG logos in {TARGET_DIR}")

# Create visual catalog HTML inside LOGOS 2
catalog_html = f'''<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LOGOS 2 — Catálogo de Identidade Visual (48 Logos)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=JetBrains+Mono:wght@400;600&family=Playfair+Display:wght@600;700;900&display=swap" rel="stylesheet">
  <style>
    body {{ font-family: 'DM Sans', sans-serif; background-color: #06070B; color: #E2E8F0; }}
    .font-mono-code {{ font-family: 'JetBrains Mono', monospace; }}
    .font-display {{ font-family: 'Playfair Display', serif; }}
    .logo-card {{ transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease; }}
    .logo-card:hover {{ transform: translateY(-4px); border-color: rgba(56, 189, 248, 0.5); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.7); }}
  </style>
</head>
<body class="min-h-screen p-6 sm:p-12">
  <header class="max-w-7xl mx-auto mb-10 pb-8 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
        <span>⚡ 48 Logos Vetoriais em Alta Resolução</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">LOGOS 2 — Galeria & Showcase</h1>
      <p class="text-sm text-slate-400 mt-2 max-w-2xl">Coleção completa de identidades visuais desenvolvidas para os 48 sites e aplicações do portfólio. Formato SVG escalável com download e cópia direta.</p>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <button onclick="downloadAll()" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition">Baixar Lista</button>
      <a href="https://portfolio-danilo-oliveira.vercel.app/" target="_blank" class="px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-xs transition">Ver Portfólio ↗</a>
    </div>
  </header>

  <main class="max-w-7xl mx-auto">
    <!-- Category Filter Bar -->
    <div class="flex flex-wrap gap-2 mb-8" id="filters"></div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="logo-grid"></div>
  </main>

  <div id="toast" class="fixed bottom-6 right-6 hidden px-4 py-3 rounded-xl bg-blue-600 text-white font-mono-code text-xs shadow-2xl z-50"></div>

  <script>
    const BRANDS = {json.dumps(BRANDS, ensure_ascii=False)};

    const cats = ['Todas', ...new Set(BRANDS.map(b => b.category))];
    let activeCat = 'Todas';

    function renderFilters() {{
      document.getElementById('filters').innerHTML = cats.map(c => `
        <button onclick="setCat('${{c}}')" class="px-4 py-1.5 rounded-full text-xs font-semibold transition ${{activeCat === c ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'}}">
          ${{c}} (${{c === 'Todas' ? BRANDS.length : BRANDS.filter(b => b.category === c).length}})
        </button>
      `).join('');
    }}

    function setCat(c) {{
      activeCat = c;
      renderFilters();
      renderGrid();
    }}

    function renderGrid() {{
      const list = activeCat === 'Todas' ? BRANDS : BRANDS.filter(b => b.category === activeCat);
      document.getElementById('logo-grid').innerHTML = list.map(b => `
        <div class="logo-card rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden flex flex-col justify-between">
          <div class="p-4 bg-black/40 border-b border-slate-800/80 aspect-[4/3] flex items-center justify-center relative group">
            <img src="./${{b.id}}.svg" alt="${{b.name}}" class="w-full h-full object-contain" />
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono-code text-slate-500">${{b.id}}</span>
                <span class="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">${{b.category}}</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-1">${{b.name}}</h3>
              <p class="text-xs text-slate-400 leading-relaxed mb-4">${{b.tagline}}</p>
            </div>
            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <a href="./${{b.id}}.svg" download="${{b.id}}.svg" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition">Baixar SVG</a>
              <button onclick="copyPath('./${{b.id}}.svg')" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">Copiar Link</button>
            </div>
          </div>
        </div>
      `).join('');
    }}

    function copyPath(p) {{
      navigator.clipboard.writeText(location.origin + location.pathname.replace('index.html', '') + p.replace('./', ''));
      showToast('Caminho do arquivo copiado!');
    }}

    function showToast(msg) {{
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.remove('hidden');
      setTimeout(() => t.classList.add('hidden'), 2500);
    }}

    renderFilters();
    renderGrid();
  </script>
</body>
</html>'''

index_path = os.path.join(TARGET_DIR, 'index.html')
with open(index_path, 'w', encoding='utf-8') as f:
    f.write(catalog_html)

print(f"Successfully created catalog visualizer at {index_path}")
