"""Build the site's one-page PDF resume with ReportLab."""
from pathlib import Path
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path('/System/Library/Fonts/Supplemental')
if (FONT_DIR / 'Arial.ttf').exists():
    pdfmetrics.registerFont(TTFont('Resume', str(FONT_DIR / 'Arial.ttf')))
    pdfmetrics.registerFont(TTFont('ResumeBold', str(FONT_DIR / 'Arial Bold.ttf')))
    pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold')
    regular, bold = 'Resume', 'ResumeBold'
else:
    regular, bold = 'Helvetica', 'Helvetica-Bold'
NAVY = colors.HexColor('#183a6f')
INK = colors.HexColor('#263445')
MUTED = colors.HexColor('#536477')
WIDTH = 595.28 - 96

def style(name, **kw):
    return ParagraphStyle(name, fontName=regular, fontSize=9.7, leading=14, textColor=INK, **kw)

body = style('Body', spaceAfter=5)
bullet = style('Bullet', leftIndent=11, firstLineIndent=-9, spaceAfter=4)
section_style = style('Section', spaceBefore=13, spaceAfter=8)
role_style = style('Role', spaceAfter=3)
meta = style('Meta', spaceAfter=7)
small = style('Small', spaceAfter=4)
story = []
def para(text, st=body): return Paragraph(text, st)
def add(text, st=body): story.append(para(text, st))
def section(title):
    add(f'<font name="{bold}" color="#183a6f" size="10.5">{title.upper()}</font>', section_style)
def role(title, dates, context):
    row=Table([[para(f'<b>{title}</b>', role_style), para(f'<font color="#536477" size="9">{dates}</font>', role_style)]],colWidths=[WIDTH-151,151])
    row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    story.append(KeepTogether([row,para(f'<font color="#536477" size="9">{context}</font>',meta)]))
def bullets(items):
    for text in items: add('• '+text, bullet)

add(f'<font name="{bold}" size="27" color="#183a6f">Aleksandr Arkhipov</font>',ParagraphStyle('Name',fontName=regular,leading=32,spaceAfter=7))
add('<font size="12.5">QA Automation Engineer</font>',ParagraphStyle('Title',fontName=regular,leading=18,textColor=INK,spaceAfter=8))
add('<font size="9" color="#536477">Israel · <link href="mailto:sinrabanse21@gmail.com">sinrabanse21@gmail.com</link> · <link href="tel:+972584221091">+972 58 4221091</link><br/><link href="https://www.linkedin.com/in/sinrabanse/">LinkedIn</link> · <link href="https://github.com/sinrabanse">GitHub</link> · <link href="https://www.sinrabanse.dev/">sinrabanse.dev</link></font>',ParagraphStyle('Contacts',fontName=regular,leading=15,spaceAfter=14))
add('QA Automation Engineer building automated test systems and cloud pipelines with Python, Google Cloud, and AI agents. Connects data and services into reusable workflows with built-in validation and reporting to reduce manual work across teams and products.')
section('Experience')
role('Software QA Engineer · ROI Labs','Sep 2025 - Present','Full-time · Herzliya, Israel')
bullets([
'Built CRM campaign automation from brief-based Google Sheets preparation to Firestore inputs and dashboard-triggered Cloud Run execution.',
'Combined Python/Playwright checks with Claude API review of numerical values, sanity checks, and language versions. Reduced campaign checking from <b>approximately two days to two hours</b>.',
'Developed proxy-based redirect validation across multiple GEOs, brands, and devices; reduced test traffic and costs with API-based checks.',
'Integrated tests with Cloud Run Jobs and Cloud Build. Built result storage and reporting with Firestore, MongoDB, Cloud Storage, and emailed reports.',
'Validated CRM communications, promotion consistency, links, and multilingual campaign content.',
])
story.append(Spacer(1,8))
role('Software QA Engineer · uTest','Jun 2025 - Sep 2025','Freelance · Remote')
bullets(['Performed manual and exploratory testing of applications and websites; executed test cases and documented actionable defects with screencasts and browser/Charles Proxy logs.'])
story.append(Spacer(1,8))
role('Supply &amp; Tenders Coordinator · B2China','Jul 2018 - Jun 2025','Self-employed · International B2B operations')
bullets(['Coordinated supplier workflows, customer orders, delivery documentation, and teamwork between Russia and China.'])
section('Technical skills')
add('<b>Testing &amp; automation</b>  Python, Playwright, Pytest, API testing, Charles Proxy<br/><b>Cloud &amp; data</b>  GCP, Cloud Run / Jobs, Cloud Build, Firestore, Cloud Storage, MongoDB<br/><b>Tools</b>  Docker, Git, Postman, Jira, Claude API, AI agents')
section('Education & certifications')
add('<b>Google IT Automation with Python</b> · Google / Coursera · Jun 2026<br/><b>QA Engineer Course</b> · Technion, Israel Institute of Technology · 2024<br/><b>Data Analyst Professional Training</b> · TripleTen Israel · 2023',small)
section('Languages')
add('English: Fluent · Hebrew: Intermediate · Russian: Native',small)

output=ROOT/'Aleksandr-Arkhipov-QA-Engineer-Resume.pdf'
SimpleDocTemplate(str(output), pagesize=(595.28,841.89), leftMargin=48, rightMargin=48, topMargin=40,bottomMargin=36,title='Aleksandr Arkhipov - QA Automation Engineer',author='Aleksandr Arkhipov').build(story)
print(output)
