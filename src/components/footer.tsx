import Link from "next/link";

import { MaxWidthWrapper } from "~/components/max-w-wrapper";
import { Logo } from "~/components/logo";
import { cn } from "~/components/ui/utils";

type LinksType = {
  name: string;
  links: {
    name: string;
    url: string;
  }[];
};

const footerLinks: { [key: string]: LinksType } = {
  product: {
    name: "Product",
    links: [
      {
        name: "Music",
        url: "/",
      },
      {
        name: "Sound Effects",
        url: "/",
      },
      {
        name: "Pricing",
        url: "/",
      },
      {
        name: "Log in",
        url: "/",
      },
      {
        name: "Start free trial",
        url: "/",
      },
    ],
  },
  how: {
    name: "How it Works",
    links: [
      {
        name: "License Model",
        url: "/",
      },
      {
        name: "For Artists",
        url: "/",
      },
      {
        name: "For Developers",
        url: "/",
      },
      {
        name: "Mobile App",
        url: "/",
      },
      {
        name: "In-Store Music",
        url: "/",
      },
      {
        name: "Enterprise",
        url: "/",
      },
      {
        name: "Community",
        url: "/",
      },
      {
        name: "Solutions",
        url: "/",
      },
    ],
  },
  about: {
    name: "About",
    links: [
      {
        name: "About us",
        url: "/",
      },
      {
        name: "Press",
        url: "/",
      },
      {
        name: "Careers",
        url: "/",
      },
      {
        name: "Blog",
        url: "/",
      },
      {
        name: "Help",
        url: "/",
      },
    ],
  },
  legal: {
    name: "Legal",
    links: [
      {
        name: "Legal information",
        url: "/",
      },
      {
        name: "Privacy",
        url: "/",
      },
      {
        name: "Cookie",
        url: "/",
      },
    ],
  },
};

export function Footer() {
  return (
    <MaxWidthWrapper asChild>
      <footer className="flex flex-col gap-16 py-10 xl:py-20">
        <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row">
          <Logo />
          <nav className="flex flex-wrap gap-8 xl:gap-16 justify-between ml-auto max-w-1/2">
            <NavLinks {...footerLinks.product} />
            <NavLinks {...footerLinks.how} />
            <NavLinks {...footerLinks.about} />
            <NavLinks {...footerLinks.legal} />
          </nav>
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-8">
          <span className="text-foreground-muted">
            Copyright © Epidemic Sound
          </span>
          <SocialLinks />
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}

function NavLinks({ name, links }: LinksType) {
  return (
    <div className="flex flex-col gap-6">
      <span className="uppercase text-foreground-muted font-bold tracking-wider">
        {name}
      </span>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      <li>
        <SocialLink
          href="https://open.spotify.com/user/epidemicsound?si=wJ4g9W5mQaWkoECTLWo0yw"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9999 2C6.47724 2 2 6.47723 2 12.0001C2 17.5231 6.47724 22 11.9999 22C17.5232 22 22 17.5231 22 12.0001C22 6.47759 17.5232 2.00048 11.9998 2.00048L11.9999 2ZM16.5858 16.423C16.4067 16.7167 16.0222 16.8099 15.7285 16.6295C13.3806 15.1954 10.4249 14.8706 6.94403 15.6659C6.6086 15.7423 6.27424 15.5321 6.19782 15.1966C6.12104 14.861 6.33037 14.5266 6.66663 14.4502C10.4759 13.5799 13.7434 13.9546 16.3793 15.5656C16.673 15.7459 16.7662 16.1292 16.5858 16.423ZM17.8098 13.7001C17.5841 14.0669 17.1041 14.1827 16.7375 13.957C14.0495 12.3048 9.95214 11.8263 6.77279 12.7914C6.36046 12.916 5.92496 12.6836 5.79982 12.272C5.67563 11.8596 5.90812 11.425 6.31974 11.2996C9.95142 10.1976 14.4663 10.7314 17.5531 12.6283C17.9197 12.854 18.0355 13.334 17.8098 13.7002V13.7001ZM17.9149 10.8647C14.692 8.95032 9.37454 8.7743 6.29741 9.70825C5.80328 9.85811 5.28073 9.57916 5.13099 9.08502C4.98125 8.59064 5.25995 8.06844 5.75444 7.91821C9.28678 6.84587 15.1589 7.05305 18.8695 9.2559C19.3149 9.51969 19.4606 10.0937 19.1967 10.5376C18.934 10.982 18.3584 11.1286 17.9154 10.8647H17.9149Z"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.youtube.com/channel/UC_sOjEnngNB2y_AEaDd2cSA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.9806 4.16329C15.6762 3.945 8.3183 3.94614 5.0194 4.16329C1.4477 4.39986 1.0264 6.49247 1 12C1.0264 17.4972 1.4433 19.6001 5.0194 19.8367C8.3194 20.0539 15.6762 20.055 18.9806 19.8367C22.5523 19.6001 22.9736 17.5075 23 12C22.9736 6.50276 22.5567 4.39986 18.9806 4.16329ZM8.7 8.57151L16.5837 11.9954L8.7 15.5555V8.57151Z"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.instagram.com/epidemicsound/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 4C16.7422 4 16 4.74225 16 5.5C16 6.25775 16.7422 7 17.5 7C18.2578 7 19 6.25775 19 5.5C19 4.74225 18.2578 4 17.5 4ZM11.5 15C9.37423 15.0351 8 13.6049 8 11.5C8 9.37193 9.5 8 11.5 8C13.5 8 15 9.5 15 11.5C15 13.5 13.5791 14.9656 11.5 15ZM11.5 6C8.5 6 6 8.5 6 11.4989C6 14.4979 8.5 17 11.5 17C14.5 17 17 14.5 17 11.5C17 8.5 14.5 6 11.5 6ZM11.5 2C14.5938 2 14.9612 2.01161 16.1824 2.06756C19.3227 2.21006 20.7899 3.7005 20.9324 6.81756C20.9894 8.03883 21 8.40617 21 11.5C21 14.5949 20.9884 14.9612 20.9324 16.1824C20.7899 19.2963 19.3269 20.7899 16.1824 20.9324C14.9612 20.9873 14.5959 21 11.5 21C8.40617 21 8.03883 20.9873 6.81756 20.9324C3.66989 20.7889 2.21006 19.2921 2.06756 16.1814C2.01161 14.9601 2 14.5938 2 11.4989C2 8.40511 2.01267 8.03883 2.06756 6.8165C2.21111 3.7005 3.67411 2.21111 6.81756 2.0665C8.03989 2.01161 8.40617 2 11.5 2Z"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.tiktok.com/@epidemicsound"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M20.9972 10.0916C20.8348 10.1075 20.6719 10.1158 20.5088 10.1166C19.6282 10.1167 18.7614 9.89606 17.9867 9.47456C17.212 9.05306 16.5537 8.44397 16.0714 7.70227V15.9236C16.0714 17.1254 15.7174 18.3002 15.0542 19.2995C14.391 20.2987 13.4483 21.0776 12.3454 21.5375C11.2426 21.9974 10.029 22.1177 8.85818 21.8832C7.68737 21.6488 6.61192 21.0701 5.76781 20.2203C4.92371 19.3705 4.34887 18.2878 4.11598 17.1091C3.88309 15.9303 4.00261 14.7086 4.45944 13.5983C4.91627 12.488 5.68988 11.539 6.68244 10.8713C7.675 10.2036 8.84194 9.84722 10.0357 9.84722C10.1617 9.84722 10.2848 9.85862 10.4087 9.86646V12.8608C10.2848 12.8459 10.1631 12.8231 10.0357 12.8231C9.21869 12.8231 8.43516 13.1498 7.85745 13.7314C7.27975 14.313 6.9552 15.1018 6.9552 15.9243C6.9552 16.7468 7.27975 17.5356 7.85745 18.1172C8.43516 18.6988 9.21869 19.0256 10.0357 19.0256C11.7373 19.0256 13.24 17.6759 13.24 15.9628L13.2698 2H16.1153C16.2453 3.2447 16.8057 4.40379 17.6987 5.2746C18.5916 6.14541 19.7601 6.67252 21 6.76377V10.0916"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.facebook.com/epidemicsound"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 9H6V13H9V22H13V13H16L17 9H13V7.541C13 6.706 13.827 6.038 14.596 6.038H17V2H13.827C10.83 2 9 3.385 9 6.038V9Z"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://twitter.com/epidemicsound"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 5.89459C21.2511 6.22114 20.4567 6.43528 19.6433 6.52988C20.5 6.02539 21.141 5.23117 21.4464 4.29553C20.6407 4.76593 19.7593 5.09729 18.8402 5.2753C18.4565 4.87226 17.9929 4.5511 17.478 4.33173C16.963 4.11236 16.4078 3.99945 15.8467 4C13.1975 4 11.2509 6.43294 11.8494 8.95906C10.2179 8.8787 8.62184 8.46145 7.1648 7.73438C5.70776 7.00732 4.42235 5.98671 3.39204 4.73883C2.86748 5.62817 2.70679 6.68083 2.94265 7.68266C3.17851 8.6845 3.79321 9.56025 4.6617 10.1318C4.01008 10.1117 3.3728 9.93837 2.8031 9.62635C2.75912 11.4984 4.12247 13.2489 6.09484 13.6386C5.49058 13.8 4.85686 13.8235 4.24198 13.7073C4.50407 14.51 5.01457 15.2119 5.70202 15.7149C6.38947 16.2178 7.21947 16.4965 8.07582 16.512C6.35571 17.8401 4.17049 18.442 2 18.1854C3.87625 19.3721 6.05984 20.0021 8.28998 20C15.9079 20 20.2122 13.6659 19.9521 7.98494C20.7553 7.41327 21.4487 6.70545 22 5.89459Z"></path>
          </svg>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.linkedin.com/company/epidemic-sound"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.33031 3C3.59583 3 3 3.57769 3 4.28939V19.711C3 20.4228 3.5959 21 4.33031 21H19.6697C20.4045 21 21 20.4227 21 19.7108V4.28939C21 3.57769 20.4045 3 19.6697 3H4.33031ZM8.46993 9.96004V18.0637H5.7764V9.96004H8.46993ZM8.64747 7.45389C8.64747 8.23155 8.06282 8.85382 7.12373 8.85382L7.12352 8.85375H7.10608C6.20207 8.85375 5.61764 8.23148 5.61764 7.45382C5.61764 6.65852 6.21972 6.05362 7.14159 6.05362C8.06282 6.05362 8.62989 6.65852 8.64747 7.45389ZM12.6542 18.0637H9.96084L9.96077 18.064C9.96077 18.064 9.99614 10.7205 9.96098 9.96032H12.6544V11.1074C13.0124 10.5553 13.6532 9.77006 15.0819 9.77006C16.854 9.77006 18.1826 10.9283 18.1826 13.4173V18.0637H15.4894V13.7289C15.4894 12.6394 15.0993 11.8964 14.125 11.8964C13.3807 11.8964 12.9375 12.3975 12.7429 12.8816C12.6717 13.0544 12.6542 13.2969 12.6542 13.5387V18.0637Z"></path>
          </svg>
        </SocialLink>
      </li>
    </ul>
  );
}

type SocialLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function SocialLink({ children, className, ...props }: SocialLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "p-3 bg-btn-brighter xl:bg-transparent xl:hover:bg-btn-brighter rounded-full grid place-items-center",
        className,
      )}
    >
      {children}
    </a>
  );
}
