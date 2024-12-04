function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 md:p-8 sm:p-4 sm:w-24sm:h-24 md:w-36 md:h-36 max-w-xs md:max-w-sm max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 md:p-8 max-w-xs md:max-w-sm max-w-sm sm:p-4 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4 text-lg md:text-xl text-sm  max-w-xs md:max-w-sm max-w-sm md:p-8 sm:p-4 text-center">John Doe</h1>
      <p className="text-gray-600 md:p-8 sm:p-4 text-lg md:text-xl text-sm max-w-xs md:max-w-sm max-w-sm text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;


