import { useState } from "react";
import { Link2, Check } from "lucide-react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaRedditAlien,
  FaXTwitter,
} from "react-icons/fa6";

function SocialShare({
  title = "Check this out!",
  url = window.location.href,
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      name: "X",
      icon: <FaXTwitter size={18} />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Reddit",
      icon: <FaRedditAlien size={18} />,
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-2">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-text/20 transition hover:bg-background hover:scale-105"
        >
          {link.icon}
        </a>
      ))}

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-text/20 transition hover:bg-background hover:scale-105"
      >
        {copied ? <Check size={18} /> : <Link2 size={18} />}
      </button>
    </div>
  );
}

export default SocialShare;
