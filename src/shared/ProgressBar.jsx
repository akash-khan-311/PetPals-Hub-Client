const ProgressBar = ({ label, progress }) => {
  return (
    <div className="mb-7">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-700">{label}</span>
        <span className="text-base text-gray-700 pr-5 ">{progress}%</span>
      </div>
      <svg
        className="rc-progress-line"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5
L 99.5,0.5"
          strokeLinecap="round"
          stroke="#FFE8C8"
          strokeWidth={1}
          fillOpacity={0}
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5
L 99.5,0.5"
          strokeLinecap="round"
          stroke="#FFA62F"
          strokeWidth={1}
          fillOpacity={0}
          style={{
            strokeDasharray: `${progress}px, 100px`,
            strokeDashoffset: 0,
            transition:
              "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
          }}
        ></path>
      </svg>
    </div>
  );
};
export default ProgressBar;
