export function IconMenuMobile(props) {
  const styles = props.styles;
  const width = props.width || 24;
  const height = props.height || 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-menu-2 ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconPlay(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-player-play-filled ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z"
      />
    </svg>
  );
}

export function IconFacebook(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-brand-facebook-filled ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2h3z"
      />
    </svg>
  );
}

export function IconArrowTop(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-arrow-up ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 5v14M18 11l-6-6M6 11l6-6" />
    </svg>
  );
}

export function IconYouTube(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-brand-youtube-filled ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM9 9v6a1 1 0 0 0 1.514.857l5-3a1 1 0 0 0 0-1.714l-5-3A1 1 0 0 0 9 9z"
      />
    </svg>
  );
}

export function IconClose(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-x ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function IconChevronUp(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-chevron-up ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

export function IconChevronDown(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-chevron-down ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconStar(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-star-filled ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="m8.243 7.34-6.38.925-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499-1.09 6.355-.013.11a1 1 0 0 0 1.464.944l5.706-3 5.693 3 .1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355 4.624-4.5.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926-2.852-5.78a1 1 0 0 0-1.794 0L8.243 7.34z"
      />
    </svg>
  );
}

export function IconUser(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-user-filled ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2zM14 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4z"
      />
    </svg>
  );
}

export function IconSearch(props) {
  const styles = props.styles || "";
  const width = props.width || 24;
  const height = props.height || 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`icon icon-tabler icon-tabler-search ${styles}`}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
    </svg>
  );
}

export function IconStarColor(props) {
  const size = props.size || "1.2em";
  const color = props.color || "#FFFF";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 576 512"
      {...props}
    >
      <path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z" />
    </svg>
  );
}

export function IconStarHalfColor(props) {
  const size = props.size || "1.2em";
  const color = props.color || "#FFFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 640 512"
      {...props}
    >
      <path d="M341.5 13.5C337.5 5.2 329.1 0 319.9 0s-17.6 5.2-21.6 13.5l-68.6 141.3-153.2 22.7c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5l111.1 110.1L148 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5l-26.4-155.5 111.2-110.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3l-153.3-22.6-68.6-141.3zM320 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3L508.9 218 423 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6-105.2-56.1c-3.5-1.9-7.4-2.8-11.2-2.8z" />
    </svg>
  );
}

export function IconTV(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 640 512"
      {...props}
    >
      <path d="M64 64v288h512V64H64zM0 64C0 28.7 28.7 0 64 0h512c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm128 384h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </svg>
  );
}

export function IconHeart(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
        margin: "0 auto",
      }}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l180.7-168.7c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </svg>
  );
}

export function IconCheck(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
}

export function IconBookMark(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 384 512"
      {...props}
    >
      <path d="M0 48v439.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400l153.7 107.6c4.1 2.9 9 4.4 14 4.4 13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
    </svg>
  );
}

export function IconSortDown(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 576 512"
      {...props}
    >
      <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v301.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z" />
    </svg>
  );
}

export function IconChevronLeft(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 320 512"
      {...props}
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
}

export function IconChevronRight(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 320 512"
      {...props}
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
}

export function IconList(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zm152 16c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zm24 136c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40z" />
    </svg>
  );
}

export function IconCirclePlay(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0zm188.3-108.9c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
    </svg>
  );
}

export function IconCircleXmark(props) {
  const size = props.size || ".75em";
  const color = props.color || "#FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
  );
}

export function IconImg(props) {
  const size = props.size || ".75em";
  const color = props.color || "#01ae43";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      style={{
        fill: color,
      }}
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
    </svg>
  );
}

// export function name(props) {}
// export function name(props) {}
// export function name(props) {}
// export function name(props) {}
// export function name(props) {}
// export function name(props) {}
