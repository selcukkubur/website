import { Icon } from "@chakra-ui/react";

const BlogIcon = () => (
    <Icon width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" id="blogIcon">
        <mask
          id="maskinkpenId"
          width="28"
          height="28"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70717 9.88073C7.49972 9.9637 7.34434 10.1407 7.28897 10.3572L4.02185 23.1275C3.96058 23.3671 4.03021 23.6211 4.20505 23.796C4.37989 23.9708 4.63399 24.0404 4.87354 23.9791L17.645 20.7123C17.8614 20.6569 18.0385 20.5016 18.1215 20.2941L18.363 19.6904C19.3927 17.1163 20.8065 14.7192 22.5517 12.5787L22.6198 12.5107L22.613 12.5038C23.1772 11.8169 23.7757 11.1566 24.4066 10.5257L24.7977 10.1346C25.0711 9.86127 25.0711 9.41808 24.7977 9.14472L18.8575 3.20502C18.5841 2.93166 18.1409 2.93166 17.8675 3.20502L17.4764 3.59607C14.862 6.21024 11.7439 8.26619 8.311 9.63922L7.70717 9.88073ZM21.6185 11.5094C22.1547 10.8628 22.72 10.239 23.313 9.63994L18.3623 4.68961C17.7632 5.28254 17.1393 5.84778 16.4926 6.38399L21.6185 11.5094ZM15.3856 7.25692C13.3764 8.76284 11.1733 10.0022 8.83097 10.939L8.55724 11.0485L6.07931 20.7341L11.1442 15.6697C10.7477 14.7932 10.9097 13.7257 11.6302 13.0053C12.5597 12.0758 14.0667 12.0758 14.9963 13.0053C15.9258 13.9347 15.9258 15.4416 14.9963 16.3711C14.2032 17.164 12.9899 17.2804 12.0734 16.7204L6.73547 22.0578L16.9536 19.4441L17.0631 19.1704C18 16.8282 19.2394 14.6254 20.7455 12.6163L15.3856 7.25692ZM12.6202 15.3811C12.2374 14.9984 12.2374 14.3779 12.6202 13.9952C13.0029 13.6124 13.6235 13.6124 14.0063 13.9952C14.389 14.3779 14.389 14.9984 14.0063 15.3811C13.6235 15.7639 13.0029 15.7639 12.6202 15.3811Z"
            fill="#FFFFFF"
          />
        </mask>
        <g mask="url(#maskinkpenId)">
          <rect width="28" height="28" fill="currentColor"></rect>
          <rect
            className="gradientIcon"
            width="28"
            height="28"
            x="0"
            y="0"
            fill="#2C1338"
          ></rect>
        </g>
        <defs>
          <linearGradient id="blogIconGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FF5E5E"></stop>
            <stop offset="1" stopColor="#9121C2"></stop>
          </linearGradient>
        </defs>
    </Icon>
)

export default BlogIcon;