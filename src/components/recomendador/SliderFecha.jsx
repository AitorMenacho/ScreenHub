import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SliderFecha({ min, max, value, onChange }) {
  return (
    <div className="py-4 w-full">
      <div className="flex items-center">
        <div className="w-full">
          <Slider
            range
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            marks={{
              [min]: value[0],
              [max]: value[1],
            }}
            trackStyle={[
              {
                backgroundColor: "#F59E0B",
                height: 10,
                borderRadius: 10,
                border: "none",
              },
            ]}
            handleStyle={[
              {
                backgroundColor: "#F59E0B",
                border: "none",
                height: 20,
                width: 20,
                marginLeft: 10,
                marginTop: -5,
              },
              {
                backgroundColor: "#F59E0B",
                border: "none",
                height: 20,
                width: 20,
                marginLeft: -10,
                marginTop: -5,
              },
            ]}
            railStyle={{
              backgroundColor: "#374151",
              height: 10,
              borderRadius: 10,
              border: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
