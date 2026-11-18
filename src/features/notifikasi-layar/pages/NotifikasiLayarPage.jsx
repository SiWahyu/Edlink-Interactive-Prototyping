import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../../hooks/usePageTitle";
import kelasIcon from "../assets/kelas-icon.png";

const TASK_NOTIF = {
  id: "pengumpulan-tugas",
  app: "kelas",
  title: "Tugas berhasil dikumpulkan @INTERAKSI MANUSIA DAN KOMPUTER",
  line1: "A3 - Interactive Prototyping",
  line2: "Jawaban kamu berhasil dikumpulkan",
  actions: ["Buka", "Tandai dibaca"],
};

const SEVIMA_GMAIL_NOTIF = {
  id: "gmail-2",
  app: "gmail",
  initial: "S",
  title: "Sevima Edlink",
  sub: "siwahyu@gmail.com",
  line1: "Konfirmasi Pengumpulan Tugas",
  line2:
    "Jawaban kamu untuk tugas A3 - Interactive Prototyping telah berhasil dikumpulkan.",
  actions: ["Arsipkan", "Balas"],
};

function GmailIcon() {
  return (
    <svg viewBox="52 42 88 66" className="h-full w-full">
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path
        fill="#c5221f"
        d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
      />
    </svg>
  );
}

function NotificationAvatar({ notification }) {
  if (notification.app === "kelas") {
    return (
      <div className="relative h-12 w-12 shrink-0">
        <img
          src={kelasIcon}
          alt="Aplikasi Kelas"
          className="h-12 w-12 rounded-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative h-12 w-12 shrink-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-xl font-medium">
        {notification.initial}
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white p-[3px] shadow">
        <GmailIcon />
      </div>
    </div>
  );
}

export default function NotifikasiLayarPage() {
  usePageTitle("Layar Kunci — Notifikasi");
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(() => {
    const now = Date.now();
    return [
      {
        id: "tugas-baru",
        app: "kelas",
        at: now - 4 * 24 * 60 * 60000,
        title: "Ada Tugas baru @INTERAKSI MANUSIA DAN KOMPUTER",
        line1: "A3 - Interactive Prototyping",
        line2: "Batas pengumpulan 19 November 2026 pukul 10.00",
        actions: ["Buka", "Tandai dibaca"],
      },
    ];
  });
  const [expanded, setExpanded] = useState(() => new Set());
  const [removing, setRemoving] = useState(() => new Set());
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const first = setTimeout(() => {
      const timestamp = Date.now();
      setNow(timestamp);
      setNotifications((prev) => [
        { ...TASK_NOTIF, at: timestamp - 30 * 60000, isNew: true },
        ...prev,
      ]);
    }, 700);
    const second = setTimeout(() => {
      const timestamp = Date.now();
      setNow(timestamp);
      setNotifications((prev) => [
        { ...SEVIMA_GMAIL_NOTIF, at: timestamp, isNew: true },
        ...prev,
      ]);
    }, 3000);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, []);

  const ago = (timestamp) => {
    const minutes = Math.floor((now - timestamp) / 60000);
    if (minutes < 1) return "sekarang";
    if (minutes < 60) return `${minutes} m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} j`;
    return `${Math.floor(hours / 24)} hari`;
  };

  const toggleExpanded = (id) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const removeNotification = (id) => {
    setRemoving((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setNotifications((prev) => prev.filter((item) => item.id !== id));
      setRemoving((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setExpanded((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 280);
  };

  const clearAll = () => {
    setRemoving(new Set(notifications.map((item) => item.id)));
    setTimeout(() => {
      setNotifications([]);
      setRemoving(new Set());
      setExpanded(new Set());
    }, 280);
  };

  const clock = new Date(now);
  const hours = String(clock.getHours()).padStart(2, "0");
  const minutes = String(clock.getMinutes()).padStart(2, "0");
  const day = clock.toLocaleDateString("id-ID", { weekday: "short" });
  const date = `${clock.toLocaleDateString("id-ID", { month: "short" })} ${clock.getDate()}`;

  return (
    <div className="min-h-screen bg-black font-roboto text-white antialiased">
      <div className="relative mx-auto min-h-screen max-w-md overflow-hidden bg-lock">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 blur-3xl"
        >
          <div className="absolute left-[8%] top-[30%] h-72 w-40 rounded-full bg-stone-400/40"></div>
          <div className="absolute left-[45%] top-[30%] h-72 w-40 rounded-full bg-stone-300/35"></div>
          <div className="absolute right-[-10%] top-[30%] h-80 w-32 rounded-full bg-green-600/60"></div>
          <div className="absolute left-[30%] top-[58%] h-40 w-48 rounded-full bg-blue-900/60"></div>
          <div className="absolute right-[10%] top-[62%] h-28 w-28 rounded-full bg-green-500/70"></div>
          <div className="absolute left-[55%] top-[68%] h-24 w-24 rounded-full bg-red-700/60"></div>
          <div className="absolute bottom-[10%] left-[5%] h-28 w-28 rounded-full bg-green-700/50"></div>
          <div className="absolute left-[20%] top-[22%] h-28 w-72 rounded-full bg-sky-900/40"></div>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Kembali"
          className="absolute left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white/80 backdrop-blur-md transition hover:bg-white/10 active:scale-95"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="relative flex min-h-screen flex-col px-5 pt-16">
          <div className="flex items-center gap-3 px-5">
            <span className="text-[64px] font-medium leading-none tracking-tight">
              {hours}.{minutes}
            </span>
            <div className="text-xl leading-tight text-white/75">
              <div>{day}</div>
              <div>{date}</div>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-2">
            {notifications.map((notification) => {
              const open = expanded.has(notification.id);
              const isRemoving = removing.has(notification.id);

              return (
                <li
                  key={notification.id}
                  data-id={notification.id}
                  className={
                    isRemoving
                      ? "fade-out"
                      : notification.isNew
                        ? "drop-in"
                        : ""
                  }
                >
                  <div className="rounded-[28px] border border-lock-line bg-lock-card px-5 py-4 backdrop-blur-xl">
                    <button
                      type="button"
                      onClick={() => toggleExpanded(notification.id)}
                      className="flex w-full items-start gap-4 text-left"
                    >
                      <NotificationAvatar notification={notification} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="truncate text-lg font-medium">
                            {notification.title}
                          </span>
                          <span className="shrink-0 text-base text-white/60">
                            {ago(notification.at)}
                          </span>
                        </div>
                        {open && notification.sub ? (
                          <p className="truncate text-sm text-white/60">
                            {notification.sub}{" "}
                            {notification.app === "gmail" ? (
                              <span className="text-white/60">· Gmail</span>
                            ) : null}
                          </p>
                        ) : null}
                        <p
                          className={`${open ? "" : "truncate"} text-base text-white/90`}
                        >
                          {notification.line1}
                        </p>
                        <p
                          className={`${open ? "" : "truncate"} text-base text-white/90`}
                        >
                          {notification.line2}
                        </p>
                      </div>
                      <svg
                        viewBox="0 0 24 24"
                        className={`mt-3 h-6 w-6 shrink-0 text-white/80 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {open ? (
                      <div className="mt-3 flex gap-6 pl-16">
                        {notification.actions.map((action) => (
                          <button
                            key={action}
                            type="button"
                            onClick={() => removeNotification(notification.id)}
                            className="text-base font-medium text-sky-300"
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>

          {notifications.length === 0 ? (
            <p className="mt-10 text-center text-white/60">
              Tidak ada notifikasi
            </p>
          ) : null}

          <div className="mt-auto flex flex-col items-center pb-3">
            <button
              type="button"
              aria-label="Hapus semua notifikasi"
              onClick={clearAll}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-lock-line bg-white/10 backdrop-blur-md transition active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M9 3h6l1 1h4v2H4V4h4l1-1Zm-3 5h12l-.9 12.1A2 2 0 0 1 15.1 22H8.9a2 2 0 0 1-2-1.9L6 8Z" />
              </svg>
            </button>
            <div className="mt-7 h-1 w-48 rounded-full bg-white/70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
