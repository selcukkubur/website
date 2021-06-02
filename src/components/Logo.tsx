import { Icon } from "@chakra-ui/react";

const LogoIcon = () => (
    <Icon viewBox="0 0 103 24" w={{base: "88px", lg: '103px'}} h='24px'>
      <path
        fill="currentColor"
        d="M74.5363 2.91684C74.5363 4.5139 73.2146 5.8635 71.6175 5.8635C70.8398 5.85194 70.0972 5.53772 69.5474 4.98754C68.9976 4.43737 68.6839 3.69456 68.6729 2.91684C68.6729 1.35159 70.0205 0 71.6175 0C73.2146 0 74.5363 1.35159 74.5363 2.91684ZM74.0394 7.52316V22.6589H69.13V7.52316H74.0394ZM38.915 15.1387C38.915 19.6228 35.5062 22.9699 31.0529 22.9699C26.5996 22.9699 23.2227 19.6228 23.2227 15.1387C23.2227 10.594 26.6016 7.21602 31.0529 7.21602C35.5042 7.21602 38.915 10.594 38.915 15.1387ZM28.0436 15.1387C28.0436 16.9196 29.3356 18.2404 31.0529 18.2404C32.804 18.2404 34.093 16.9196 34.093 15.1387C34.093 13.2962 32.801 11.9456 31.0529 11.9456C29.3336 11.9456 28.0436 13.2962 28.0436 15.1387ZM55.1281 15.6306C55.1281 19.9299 52.1189 22.9699 47.8813 22.9699C43.6079 22.9699 40.5728 19.9299 40.5728 15.6306V7.5231H45.4852V15.6306C45.4852 17.2267 46.4064 18.2404 47.8813 18.2404C49.2935 18.2404 50.2455 17.2267 50.2455 15.6306V7.5231H55.1281V15.6306ZM67.2575 11.8838V7.40073C66.7817 7.30698 66.2985 7.25544 65.8135 7.24669C64.1558 7.24669 62.8699 7.92745 61.9754 9.12003V7.52297H57.062V22.6587H61.9754V15.6613C61.9754 12.7743 63.6341 11.7 65.6913 11.7C66.1604 11.7 66.6586 11.7835 67.1841 11.8715L67.2575 11.8838ZM80.201 16.367H91.0077C91.0693 15.8145 91.1329 15.0165 91.1329 14.6169C91.1329 10.4717 87.7241 7.21602 83.6098 7.21602C79.1565 7.21602 75.7179 10.6248 75.7179 15.0473C75.7179 19.4995 79.2181 22.9699 83.7012 22.9699C87.5711 22.9699 90.4263 20.8203 90.8875 17.4732H86.0665C85.8508 18.302 85.022 18.9162 83.5481 18.9162C81.8587 18.9162 80.5697 17.9333 80.201 16.367ZM83.3623 11.2082C84.6801 11.2082 85.8488 12.038 85.9721 13.2654H80.4137C80.9354 11.8223 82.0107 11.2082 83.3623 11.2082ZM103 7.40073V11.8838L102.924 11.8711C102.399 11.7832 101.903 11.7 101.434 11.7C99.3765 11.7 97.7178 12.7743 97.7178 15.6613V22.6587H92.8054V7.52297H97.7178V9.12003C98.6123 7.92745 99.8983 7.24669 101.557 7.24669C102.042 7.25544 102.524 7.30699 103 7.40073ZM21.8665 10.4054C21.8547 10.4499 21.8332 10.4912 21.8035 10.5264C20.9528 11.5123 18.4186 11.4139 18.4186 11.4139C17.1539 11.4139 15.9168 11.0448 14.8588 10.3519C13.8009 9.659 12.9681 8.67243 12.4627 7.51317C12.1882 6.86152 11.7356 6.30042 11.1568 5.89425C10.725 5.59141 10.2219 5.40581 9.69689 5.3556C9.69689 5.3556 6.44514 4.58241 3.78271 8.13828C3.76591 8.16039 3.75449 8.18612 3.74935 8.21342C3.74422 8.24072 3.74551 8.26884 3.75313 8.29555C3.76075 8.32226 3.77448 8.34684 3.79324 8.36732C3.81201 8.3878 3.83528 8.40364 3.86122 8.41356L4.49229 8.65605C4.73142 8.74793 4.94172 8.90189 5.10156 9.10208C5.26139 9.30226 5.36497 9.54143 5.40163 9.79496L5.64512 11.4844C5.98401 14.5732 8.16443 17.1114 11.2721 17.1114C12.3931 17.113 13.4888 16.7782 14.4175 16.1504C14.4175 16.1504 14.9482 15.7559 15.6598 15.2927C16.436 14.7884 17.3181 14.4698 18.2375 14.3617C19.1568 14.2537 20.0887 14.359 20.9608 14.6696L21.4149 14.8386C21.491 14.8659 21.5539 14.9212 21.5908 14.9932C21.6277 15.0651 21.6359 15.1484 21.6137 15.2261C20.9513 17.5306 19.5556 19.5563 17.6383 20.9962C15.721 22.4361 13.3866 23.2117 10.9888 23.2055C5.04784 23.1896 0.0420008 18.2066 0.000260616 12.2656C-0.0187268 9.50322 1.00041 6.83447 2.85581 4.78789C4.71122 2.74132 7.26757 1.4662 10.0186 1.21507C12.7695 0.963949 15.5145 1.75514 17.7098 3.43195C19.9051 5.10875 21.3906 7.54887 21.8721 10.269C21.8803 10.3143 21.8784 10.3609 21.8665 10.4054ZM7.404 7.23201C7.404 7.58658 7.11657 7.87402 6.762 7.87402C6.40743 7.87402 6.12 7.58658 6.12 7.23201C6.12 6.87745 6.40743 6.59001 6.762 6.59001C7.11657 6.59001 7.404 6.87745 7.404 7.23201ZM6.89747 11.2371C7.05947 12.2369 7.84657 15.4111 11.3696 15.9955C11.3804 15.9968 11.3913 15.9943 11.4005 15.9884C11.4096 15.9825 11.4164 15.9736 11.4197 15.9632C11.423 15.9529 11.4226 15.9417 11.4186 15.9316C11.4145 15.9215 11.407 15.9132 11.3975 15.908C10.5815 15.5323 8.44385 14.298 6.98393 11.2112C6.9792 11.2015 6.97114 11.1937 6.96121 11.1894C6.95128 11.185 6.94012 11.1843 6.92972 11.1874C6.91932 11.1905 6.91037 11.1972 6.90447 11.2063C6.89856 11.2154 6.89608 11.2263 6.89747 11.2371Z"
      />
    </Icon>
)

export default LogoIcon;