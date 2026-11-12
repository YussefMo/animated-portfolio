"""
CV Generator — creates tailored .docx CVs and converts to PDF.

Usage:
  python scripts/generate_cv.py                       # base CV → youssef_cv.docx
  python scripts/generate_cv.py --variant fullstack   # full-stack variant
  python scripts/generate_cv.py --variant react       # React / Next.js variant
  python scripts/generate_cv.py --pdf                 # also output PDF
  python scripts/generate_cv.py --job "Software Engineer, Node.js and React"
"""

from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
import argparse, os

# ─── DATA ───────────────────────────────────────────────

NAME = "Youssef Mohammed Ali"
TITLE = "Software Engineer"
TAGLINE = "Full-stack product engineering — React · Next.js · React Native · Node · Laravel · AI automation"
EMAIL = "youssefmohammed12090@gmail.com"
PHONE = "+20 1062479462"
LOCATION = "Menoufia, Egypt (Remote)"
PORTFOLIO = "https://www.ymdev.me"
LINKEDIN = "https://linkedin.com/in/ymdev"
GITHUB = "https://github.com/YussefMo"

SUMMARY_BASE = (
    "Software Engineer with production experience shipping SaaS products end to end: "
    "React and Next.js clients, React Native mobile apps, Node and Laravel APIs, and "
    "AI/automation pipelines. Strong in frontend architecture, performance, and design "
    "systems, with hands-on backend work in PostgreSQL, MongoDB, queues, and payments."
)

EXPERIENCES = [
    {
        "company": "Diagnosit",
        "role": "Frontend Engineer (full-stack scope)",
        "period": "Jun 2025 — Present",
        "location": "Remote, UAE",
        "bullets": [
            "Re-architected a large Next.js SaaS application into a modular architecture, accelerating feature delivery by ~50% and improving long-term maintainability.",
            "Led the UI/UX redesign and built the shared design system (shadcn/ui + Tailwind), reducing new feature development time by 45%.",
            "Shipped the Live Patient Link, a public treatment-plan experience with 3D visualisation, cutting initial load by 45% and bundle size by 70%.",
            "Built a client- and server-side PDF pipeline covering 33 dental and hair widgets, rendering bilingual treatment plans.",
            "Architected the React Native (Expo) mobile app to full web parity: authentication, realtime chat, push notifications, deep links, and EAS releases.",
            "Integrated 500+ REST endpoints with TanStack Query and Axios, adding caching, optimistic updates, and typed contracts across web and mobile.",
        ],
    },
    {
        "company": "Web Masters",
        "role": "Frontend Developer Intern",
        "period": "Apr 2025 — Jun 2025",
        "location": "Remote, Egypt",
        "bullets": [
            "Built responsive React and Next.js interfaces from Figma designs within an Agile team.",
            "Refactored legacy components into clean, maintainable, production-ready code and worked through Git reviews.",
        ],
    },
]

PROJECTS = [
    {
        "name": "AI Website Audit — full-stack SaaS",
        "stack": "Next.js · Express · MongoDB · BullMQ · Redis · Playwright · Lighthouse · Gemini",
        "bullet": "Built both halves of a production audit product: a Next.js 16 client with i18n and billing, and an API with queued Playwright/Lighthouse workers, JWT and Google OAuth, Paymob subscriptions, and usage quotas.",
    },
    {
        "name": "Multi-Tenant SaaS API",
        "stack": "Laravel 13 · PHP 8.3 · PostgreSQL · Stripe · OpenAPI 3.1 · GitHub Actions",
        "bullet": "Designed a schema-per-tenant Laravel API with a separate owner schema, Stripe billing and webhooks, generated OpenAPI docs, demo seeding, and CI.",
    },
    {
        "name": "Faceless Video Creator — closed source",
        "stack": "n8n · llama.cpp · Chatterbox · Remotion · React · Python · ffmpeg",
        "bullet": "Built a local-first content pipeline that turns a topic into a rendered 9:16 video: research, script, local voice, validated scene plan, and two human approval gates.",
    },
]

EDUCATION = {
    "degree": "Bachelor of Business Information Systems (BIS)",
    "school": "El-Gezera Institute",
    "period": "Oct 2021 — Jun 2025",
}

SKILLS = [
    "Languages: TypeScript, JavaScript (ES6), PHP, SQL, Python",
    "Frontend: React, Next.js, React Native, Expo, Tailwind CSS, shadcn/ui, GSAP",
    "Backend: Node.js, Express, Laravel, REST APIs, PostgreSQL, MongoDB, Redis, BullMQ",
    "Data & State: TanStack Query, Axios, Zod, React Hook Form",
    "AI & Automation: Gemini, Vercel AI SDK, n8n, agent workflows, Playwright, Lighthouse",
    "Payments & Services: Stripe, Paymob, Firebase, Cloudinary",
    "Tooling: Git, GitHub Actions, Vite, Vitest, Vercel, Figma",
]

# ─── VARIANTS ───────────────────────────────────────────

VARIANTS = {
    "fullstack": {
        "title": "Software Engineer — Full-Stack",
        "summary_extra": (
            "Ships the whole product surface: client, mobile, API, and automation. "
            "Comfortable owning a feature from schema to shipped UI."
        ),
    },
    "react": {
        "title": "Software Engineer — React / Next.js",
        "summary_extra": (
            "Deep experience with React Server Components, App Router architecture, "
            "and Next.js performance optimization on production SaaS."
        ),
    },
    "mobile": {
        "title": "Software Engineer — React Native",
        "summary_extra": (
            "Specialized in cross-platform mobile with React Native and Expo: "
            "authentication, realtime data, push notifications, deep links, and store releases."
        ),
    },
    "ai": {
        "title": "Software Engineer — AI Products",
        "summary_extra": (
            "Builds AI-powered product features and agent pipelines: LLM integrations, "
            "structured outputs, local models, and human-in-the-loop automation."
        ),
    },
    "backend": {
        "title": "Software Engineer — Backend",
        "summary_extra": (
            "Hands-on backend work with Node and Laravel: multi-tenant data models, "
            "queues and workers, payments, and typed API contracts."
        ),
    },
}

# ─── BUILD ──────────────────────────────────────────────

def build_cv(variant=None, job_description=None, output_path="youssef_cv.docx"):
    doc = Document()

    section = doc.sections[0]
    section.top_margin = Inches(0.55)
    section.bottom_margin = Inches(0.45)
    section.left_margin = Inches(0.7)
    section.right_margin = Inches(0.7)

    style = doc.styles["Normal"]
    font = style.font
    font.name = "Calibri"
    font.size = Pt(10.5)
    font.color.rgb = RGBColor(0x1a, 0x1a, 0x1a)
    style.paragraph_format.space_after = Pt(4)
    style.paragraph_format.space_before = Pt(0)

    # ── Header ──
    name_p = doc.add_paragraph()
    name_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = name_p.add_run(NAME)
    run.bold = True
    run.size = Pt(20)
    run.font.color.rgb = RGBColor(0x0d, 0x0d, 0x0d)

    variant_title = VARIANTS.get(variant, {}).get("title", TITLE) if variant else TITLE
    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run = title_p.add_run(variant_title)
    run.size = Pt(12)
    run.font.color.rgb = RGBColor(0x40, 0x40, 0x40)

    tagline_p = doc.add_paragraph()
    tagline_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    tagline_p.paragraph_format.space_after = Pt(2)
    run = tagline_p.add_run(TAGLINE)
    run.size = Pt(8.5)
    run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

    contact_p = doc.add_paragraph()
    contact_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact_p.paragraph_format.space_after = Pt(2)
    contact_info = f"{LOCATION}  |  {EMAIL}  |  {PHONE}"
    run = contact_p.add_run(contact_info)
    run.size = Pt(9)
    run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

    links_p = doc.add_paragraph()
    links_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    links_p.paragraph_format.space_after = Pt(8)
    links_text = f"LinkedIn: {LINKEDIN}  |  GitHub: {GITHUB}  |  Portfolio: {PORTFOLIO}"
    run = links_p.add_run(links_text)
    run.size = Pt(9)
    run.font.color.rgb = RGBColor(0x4b, 0x4d, 0x83)

    # ── Summary ──
    add_section_heading(doc, "Professional Summary")
    summary = SUMMARY_BASE
    if variant and variant in VARIANTS:
        extra = VARIANTS[variant].get("summary_extra", "")
        if extra:
            summary = SUMMARY_BASE + " " + extra
    if job_description:
        summary = tailor_summary(summary, job_description)
    p = doc.add_paragraph(summary)
    p.paragraph_format.space_after = Pt(6)

    # ── Experience ──
    add_section_heading(doc, "Experience")
    for exp in EXPERIENCES:
        header = doc.add_paragraph()
        header.paragraph_format.space_after = Pt(0)
        header.paragraph_format.space_before = Pt(5)
        run = header.add_run(f"{exp['company']} — {exp['role']}")
        run.bold = True
        run.size = Pt(10.5)

        meta = doc.add_paragraph()
        meta.paragraph_format.space_after = Pt(2)
        run = meta.add_run(f"{exp['location']}  |  {exp['period']}")
        run.size = Pt(9)
        run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

        for bullet in exp["bullets"]:
            bp = doc.add_paragraph(style="List Bullet")
            bp.clear()
            run = bp.add_run(bullet)
            run.size = Pt(10)
            bp.paragraph_format.space_after = Pt(1)

    # ── Selected Projects ──
    add_section_heading(doc, "Selected Projects")
    for project in PROJECTS:
        header = doc.add_paragraph()
        header.paragraph_format.space_after = Pt(0)
        header.paragraph_format.space_before = Pt(4)
        run = header.add_run(project["name"])
        run.bold = True
        run.size = Pt(10)

        stack_p = doc.add_paragraph()
        stack_p.paragraph_format.space_after = Pt(1)
        run = stack_p.add_run(project["stack"])
        run.size = Pt(8.5)
        run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

        bp = doc.add_paragraph(style="List Bullet")
        bp.clear()
        run = bp.add_run(project["bullet"])
        run.size = Pt(9.5)
        bp.paragraph_format.space_after = Pt(2)

    # ── Education ──
    add_section_heading(doc, "Education")
    edu = doc.add_paragraph()
    edu.paragraph_format.space_after = Pt(1)
    run = edu.add_run(f"{EDUCATION['degree']} — {EDUCATION['school']}")
    run.bold = True
    run.size = Pt(10)

    edu_meta = doc.add_paragraph()
    edu_meta.paragraph_format.space_after = Pt(4)
    run = edu_meta.add_run(EDUCATION["period"])
    run.size = Pt(9)
    run.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

    # ── Skills ──
    add_section_heading(doc, "Technical Skills")
    for skill in SKILLS:
        sp = doc.add_paragraph(skill)
        sp.paragraph_format.space_after = Pt(1)
        sp.style.font.size = Pt(9.5)

    doc.save(output_path)
    print(f"Saved: {os.path.abspath(output_path)}")
    return output_path


def add_section_heading(doc, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(2)
    if text:
        run = p.add_run(text.upper())
        run.bold = True
        run.size = Pt(10)
        run.font.color.rgb = RGBColor(0x1a, 0x1a, 0x1a)
    else:
        p.paragraph_format.space_before = Pt(0)
    return p


def tailor_summary(summary, job_description):
    keywords = job_description.lower()
    additions = []
    if "react native" in keywords or "mobile" in keywords:
        additions.append("Proven experience architecting cross-platform mobile applications with React Native and Expo.")
    if "ai" in keywords or "llm" in keywords or "machine learning" in keywords:
        additions.append("Hands-on experience integrating AI/LLM features and agent workflows into production products.")
    if "design system" in keywords:
        additions.append("Shipped reusable design systems that accelerated team velocity by 45%.")
    if "performance" in keywords:
        additions.append("Track record of measurable performance optimization — 60% faster page loads, 70% smaller bundles.")
    if "backend" in keywords or "laravel" in keywords or "php" in keywords or "node" in keywords:
        additions.append("Hands-on backend experience with Node.js and Laravel, including PostgreSQL/MongoDB, queues, and payments.")
    if "full-stack" in keywords or "full stack" in keywords:
        additions.append("Ships features end to end, from database schema and API to the shipped interface.")
    if additions:
        return summary + " " + " ".join(additions)
    return summary


# ─── CLI ────────────────────────────────────────────────

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate tailored CV")
    parser.add_argument("--variant", choices=list(VARIANTS.keys()), help="CV variant")
    parser.add_argument("--job", type=str, help="Job description for tailoring")
    parser.add_argument("--output", type=str, default=None, help="Output path")
    parser.add_argument("--pdf", action="store_true", help="Also convert to PDF")

    args = parser.parse_args()

    output = args.output or (
        f"youssef_cv_{args.variant}.docx" if args.variant else "youssef_cv.docx"
    )

    path = build_cv(variant=args.variant, job_description=args.job, output_path=output)

    if args.pdf:
        import subprocess
        pdf_path = output.replace(".docx", ".pdf")
        script = os.path.join(os.path.dirname(__file__), "docx2pdf.js")
        subprocess.run(["node", script, output, pdf_path], check=True)
