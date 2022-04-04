import { Colors } from '../components/Colors'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="font:40 font:heavy font:italic m:50 text:center">
        Hello Master Styles
      </h1>
      <Colors />
    </div>
  );
}
