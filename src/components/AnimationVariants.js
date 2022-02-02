export const FadeIn  = (direction) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : -40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.6,
              ease: "easeInOut",
            }
        }
    }
}
export const FadeInExtreme = () => {
    return {
        hidden: {
            y: "-80vh",
            opacity: 0
        },
        visible: {
            y: "0vh",
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.5,
                delay: 1.2,
            }
        }
    }
}
export const FadeinSide = () => {
    return {
        hidden: {
            x: "-110px",
            opacity: 0
        },
        visible: {
            x: "0px",
            position: "fixed",
            top: "0px",
            zIndex: 2,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }
}
export const NavbarOpen = (visible) => {
    return {
        hidden: {
            x: "-120vw",
            opacity: 0
        },
        visible: {
            x: visible,
            opacity: 1,
            transition: {
                type: "none",
                duration: 0.3,
                staggerChildren: 0.06
            }
        }
    }
}
export const ListItem = (visible) => {
    return {
        hidden: {
            x: '-120vw'
        },
        visible: {
            x: visible,
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 50   
            }
        }
    }
}
export const HamburgerTopLine = (state) => {
    return {
        hidden: {
            y: state ? ["4px", "4px", "4px"] : ["0px", "0px", "4px"],
            rotate: state ? [0, 0, 0, 45] : [0, 0, 0, 0]
        },
        visible: {
            y: state ? ["4px", "4px", "4px", "4px", "0px"] : ["4px", "4px", "4px"],
            rotate: state ? [0, 0] : [0, 0, 0, 45],
            transition: { duration: 0.3}
        }
    }
}
export const HamburgerBottomLine = (state) => {
    return {
        hidden: {
            y: state ? ["-4px", "-4px", "-4px"] : ["0px", "0px", "0px"],
            rotate: state ? [0, 0, 0, -45] : [0, 0, 0, 0]
        },
        visible: {
            y: state ? ["-4px", "-4px", "-4px", "-4px", "0px"] : ["-4px", "-4px", "-4px"],
            rotate: state ? [0, 0] : [0, 0, 0, -45],
            transition: { duration: 0.3}
        }
    }
}