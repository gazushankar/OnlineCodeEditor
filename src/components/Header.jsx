import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import logo from "/logo.png";


export const Header = () => {
 


  return (
    <>
      <nav className="w-full h-9 bg-gray-200 p-3 flex justify-between items-center text-xs">
        <div className="flex justify-between gap-2 items-center w-full">
          <div className="flex justify-between items-center ">
            <div className="flex h-8 justify-between items-center gap-2">
              <div className="cursor-pointer size-8">
                {/* for Logo */}
                <img src={logo} alt="Logo" />;
              </div>
              <div className="flex justify-between items-center gap-1 ">
                <div>
                  {/* for File Drop Down */}
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className="gap-2">
                        File
                        <span>
                          <FaCaretDown />
                        </span>
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>New</MenubarItem>
                        <MenubarItem>Make bin private</MenubarItem>
                        <MenubarItem>
                          Delete<MenubarShortcut>⌘⇧</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Archive</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Add description</MenubarItem>
                        <MenubarItem>
                          Save snapshot<MenubarShortcut>⌘s</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>Clone</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem> Publish to vanity homepage </MenubarItem>
                        <MenubarItem> Export as gist</MenubarItem>
                        <MenubarItem> Download </MenubarItem>
                        <MenubarItem> Save as template </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                </div>
              </div>
            </div>
            <div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Add Library</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Email link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>

          <div className="flex justify-between border rounded-sm  border-gray-200 items-center">
            {/* mid bar */}

            <ul className="flex text-sm  ">
              <li>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "lsm",
                  })}
                  to="/Html"
                >
                  <button>Html</button>
                </Link>
              </li>
              <li>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                  to="/Css"
                >
                  <button>Css</button>
                </Link>
              </li>
              <li>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                  to="/JavaScript"
                >
                  <button>JavaScript</button>
                </Link>
              </li>
              <li>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                  })}
                  to="/Console"
                >
                  <button>Console</button>
                </Link>
              </li>
              <li>
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "rsm",
                  })}
                  to="/Output"
                >
                  <button>Output</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center   space-x-6 ">
            <div className="p-1 ">
              <button className="bg-yellow-200 p-1    ">
                Login or Register
              </button>
            </div>
            <button className="  p-1   ">Blog</button>
            <button className="  p-1  ">Help</button>
          </div>
        </div>
      </nav>
    </>
  );
};
