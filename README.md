# 🧑‍💼 VARA COOL

Aplicație de tip **eCommerce** pentru vânzarea de haine, construită cu **Next.js** (frontend) și **Flask** (backend). Permite afișarea produselor, adăugarea acestora în coș, gestionarea detaliilor și interacțiunea cu baza de date printr-o interfață modernă și ușor de utilizat. Scopul proiectului este de a oferi o platformă simplă, rapidă și intuitivă pentru cumpărături online.


---

## 🚀 Funcționalități

- 👤 **Adaugă Angajat** – înregistrează angajați noi
- 📝 **Editează Angajat** – modifică informațiile existente
- ❌ **Șterge Angajat** – elimină angajați din sistem
- 🔐 **Login & Register** – (în dezvoltare)
- 📧 **Notificări Email** – (în curs de implementare)
- 🛡️ **Securitate JWT** – planificat pentru protecția datelor

---

## ⚙️ Stack Tehnologic

### 🔙 Backend – Flask API
- **Python** – limbajul principal
- **Flask** – microframework pentru backend REST
- **Flask-SQLAlchemy** – ORM pentru interacțiunea cu baza de date
- **SQLite** (local dev) / **PostgreSQL** (production)
- **Flask-CORS** – suport pentru cereri din frontend
- **Flask-JWT-Extended** – (planificat) autentificare & autorizare
- **Email-sender** – (în lucru)

### 🔜 Frontend – Next.js
- **Next.js 14** – React-based SSR framework
- **React.js** – component-based UI
- **Tailwind CSS** – framework de stilizare
- **fetch() API** – pentru integrarea cu Flask backend

---

## 🐘 Baza de date

- **SQLite** – pentru testare și dezvoltare locală
- **PostgreSQL** – pentru producție (planificat)

---

## 📸 Preview UI

<div style="display: grid; grid-template-columns: auto; row-gap: 10px">
  <img src="https://i.imgur.com/FSRzGbS.png" width="100%" alt="Preview UI" />
</div>

---

## ▶️ Getting Started

### 🔧 Frontend

cd frontend
npm install
npm run dev

### 🔧 Backend

cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py




