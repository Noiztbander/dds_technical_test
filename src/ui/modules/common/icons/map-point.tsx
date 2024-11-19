const MapPointIcon = ({ color }: { color: string }) => {
  return (
    <i>
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.5 0C4.04182 0.00153607 2.64383 0.540107 1.61274 1.49756C0.581648 2.45501 0.00165421 3.75315 0 5.10719C0 9.47733 5 12.7779 5.21313 12.916C5.2972 12.9707 5.39735 13 5.5 13C5.60265 13 5.7028 12.9707 5.78687 12.916C6 12.7779 11 9.47733 11 5.10719C10.9983 3.75315 10.4184 2.45501 9.38726 1.49756C8.35617 0.540107 6.95818 0.00153607 5.5 0ZM5.5 3.25003C5.89556 3.25003 6.28224 3.35895 6.61114 3.56302C6.94004 3.76709 7.19638 4.05714 7.34776 4.39649C7.49913 4.73584 7.53874 5.10925 7.46157 5.46951C7.3844 5.82976 7.19392 6.16068 6.91421 6.42041C6.63451 6.68013 6.27814 6.85701 5.89018 6.92867C5.50222 7.00033 5.10009 6.96355 4.73463 6.82299C4.36918 6.68242 4.05682 6.44439 3.83706 6.13898C3.6173 5.83357 3.5 5.47451 3.5 5.10719C3.5 4.61464 3.71071 4.14227 4.08579 3.79398C4.46086 3.4457 4.96957 3.25003 5.5 3.25003Z"
          fill={color}
        />
      </svg>
    </i>
  );
};

export default MapPointIcon;