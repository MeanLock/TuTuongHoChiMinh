import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const navRef = useRef([]);
  const navigate = useNavigate();
  // Register plugin react
  gsap.registerPlugin(useGSAP);

  // Hàm xử lý navigate và đóng header
  const handleNavigate = (href) => {
    setOpen(false); // Đóng header trước
    setTimeout(() => {
      navigate(href); // Navigate sau khi animation đóng hoàn tất
    }, 300); // Delay một chút để animation chạy mượt
  };

  useGSAP(
    () => {
      if (open) {
        // Overlay slide in
        gsap.to(overlayRef.current, {
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Nav items fade in + slide up, delay dần (stagger)
        gsap.fromTo(
          navRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.3, // chờ overlay trượt ra 1 tí rồi mới chạy
          }
        );
      } else {
        // Overlay slide out
        gsap.to(overlayRef.current, {
          x: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [open] } // chạy lại khi open thay đổi
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      {/* Hamburger */}

      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          top: 0,
          left: 0,
          position: "relative",
          zIndex: 50,
          color: "white",
        }}
      >
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md text-white flex flex-col items-center justify-center gap-8 text-2xl"
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Nút tắt */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-3xl font-bold"
        >
          ×
        </button>

        {/* Nav items */}
        <nav className="flex flex-col gap-6">
          {[
            { href: "/trang-chu", label: "Trang chủ" },
            {
              href: "/qua-trinh-ra-doi",
              label:
                "Quá trình ra đời và phát triển của Đảng Cộng Sản Việt Nam",
            },
            // {
            //   href: "/dang-ngay-nay",
            //   label: "Đảng và Nhà nước ta hiện nay",
            // },
            {
              href: "/ai-chatbot",
              label: "Trò Chuyện Cùng AI",
            },
            { href: "/ket-luan", label: "Kết luận" },
          ].map((item, i) => (
            <p
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              ref={(el) => (navRef.current[i] = el)}
              className="opacity-0 font-grenze text-white hover:underline cursor-pointer"
            >
              {item.label}
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
}
