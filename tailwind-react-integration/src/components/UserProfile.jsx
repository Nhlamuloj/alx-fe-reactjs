function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 md:max-w-sm sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-36  md:max-w-sm sm:h-36 sm:p-4 mx-auto sm:w-24sm:h-24 md:w-36 md:h-36" 
      />
      <h1 className="text-lg sm:text-xl  md:max-w-sm text-blue-800 my-4 md:text-xl">John Doe</h1>
      <p className="text-sm sm:text-base text-gray-600 md:text-xl">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
