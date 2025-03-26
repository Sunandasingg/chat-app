// User Data for dynamic addition of users in user list...........................
const usersData = [
    {
      avatar:
        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      name: "Ram",
      time: "3 min ago",
      status: "sales",
    },
    {
      avatar:
        "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
      name: "Sara",
      time: "10 min ago",
      status: "sales",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmxEEF0izutG58whJemDND76CLGgTMqujmQ&s",
      name: "satya",
      time: "3 hours ago",
      status: "sales",
    },
    {
      avatar:
        "https://cdn.dribbble.com/userupload/36500593/file/original-a946c50e764da3af9a837ef9fe575328.jpg?format=webp&resize=400x300&vertical=center",
      name: "murty",
      time: "4 hours ago",
      status: "student",
    },
    {
      avatar: "https://png.pngtree.com/thumb_back/fw800/background/20231002/pngtree-stylish-3d-male-cartoon-with-glasses-and-vibrant-yellow-orange-polo-image_13510622.png",
      name: "Nikhil",
      time: "8 hours ago",
      status: "student",
    },
    {
      avatar:
        "https://png.pngtree.com/png-clipart/20241125/original/pngtree-cartoon-user-avatar-vector-png-image_17295195.png",
      name: "Abhishek",
      time: "22 hours ago",
      status: "IT",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4l4dH547Q8rosQ3Yf5XVz2nFmTuWpTBSnQ&s",
      name: "kavya",
      time: "1 day ago",
      status: "anime",
    },
    {
      avatar: "https://img.freepik.com/premium-vector/business-woman-avatar-illustration-simple-cartoon-user-portrait-business-leader_118339-4410.jpg",
      name: "moon",
      time: "Dec 10",
      status: "actor",
    },
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/029/364/941/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg",
      name: "jagat",
      time: "Dec 8",
      status: "student",
    },
    {
      avatar: "https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_6489287.png",
      name: "daddy",
      time: "Dec 6",
      status: "player",
    },
    {
      avatar:
        "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png",
      name: "mummy",
      time: "Dec 4",
      status: "homemaker",
    },
    {
      avatar:
        "https://i.pinimg.com/236x/08/e3/c9/08e3c9f345bf81a24955b996ef746d94.jpg",
      name: "kalpana",
      time: "Dec 2",
      status: "home",
    },
  ];
  
  // Json data ...........................................
  const JsonData = {
    chat1: [
      {
        from: {
          type: "user1",
        },
        msg: {
          message: "Hi, how can I help you?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message:
            "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
        },
      },
      {
        from: {
          type: "user1",
        },
        msg: {
          message:
            "Sure! I will definitely help you with you query. Could you please confirm your email address?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message: "john.mayers@gmail.com",
        },
      },   
    ],
    chat2: [
      {
        from: {
          type: "user1",
        },
        msg: {
          message: "Hi, how can I help you?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message:
            "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
        },
      },
      {
        from: {
          type: "user1",
        },
        msg: {
          message:
            "Sure! I will definitely help you with you query. Could you please confirm your email address?",
        },
      },
      {
        from: {
          type: "user2",
        },
        msg: {
          message: "tony.stark@gmail.com",
        },
      },    
    ],
    
  };
  