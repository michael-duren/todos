export default function AvatarPanel() {
  return (
    <div className="flex-col h-full w-full justify-center">
      <div className="flex gap-4 items-center">
        <img
          className="h-20 w-20"
          src="src/assets/Avatar-self.png"
          alt="user avatar"
        />
        <h3 className="text-lg">Michael Duren</h3>
      </div>
    </div>
  );
}
