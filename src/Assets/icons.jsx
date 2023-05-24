import * as sVar from "../Styles/styleVarients";

export const EmptyHeart = ({ width }) => {
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={sVar.black05}
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
  );
};

export const FilledHeart = ({ width }) => {
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={sVar.lightGreen100}
        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
      />
    </svg>
  );
};

export const EmptyCheck = () => {
  return (
    <svg width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        fill={sVar.black40}
        d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
      />
    </svg>
  );
};

export const FilledCheck = () => {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#005C53"/>
    </svg>
  );
};
