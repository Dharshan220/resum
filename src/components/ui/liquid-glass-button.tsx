"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ─── Standard Button (CVA) ─── */
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "bg-gradient-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 text-primary-foreground",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

/* ─── Shine Effect ─── */
function ShineEffect({ isPressed }: { isPressed: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-lg transition-opacity duration-300",
        isPressed ? "opacity-0" : "opacity-100"
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 55%, transparent 60%)",
          animation: "shine-sweep 3s ease-in-out infinite",
        }}
      />
    </div>
  )
}

/* ─── Metal Button ─── */
export interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "silver" | "gold" | "copper" | "dark"
  size?: "sm" | "md" | "lg"
}

const metalVariants = {
  silver: {
    wrapper: "relative inline-flex rounded-xl p-[1px]",
    wrapperStyle: {
      background: "linear-gradient(145deg, #e8e8e8, #a0a0a0, #e0e0e0)",
    },
    inner: "absolute inset-[1px] rounded-[11px]",
    innerStyle: {
      background: "linear-gradient(145deg, #d4d4d4, #808080, #c0c0c0)",
    },
    button:
      "relative z-10 inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-zinc-800 transition-all duration-200",
    buttonStyle: {
      background: "linear-gradient(145deg, #f0f0f0 0%, #c8c8c8 50%, #e0e0e0 100%)",
      textShadow: "0 1px 1px rgba(255,255,255,0.6)",
    },
  },
  gold: {
    wrapper: "relative inline-flex rounded-xl p-[1px]",
    wrapperStyle: {
      background: "linear-gradient(145deg, #ffd700, #b8860b, #ffd700)",
    },
    inner: "absolute inset-[1px] rounded-[11px]",
    innerStyle: {
      background: "linear-gradient(145deg, #daa520, #8b6914, #cd853f)",
    },
    button:
      "relative z-10 inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-amber-900 transition-all duration-200",
    buttonStyle: {
      background: "linear-gradient(145deg, #ffe066 0%, #daa520 50%, #f0c040 100%)",
      textShadow: "0 1px 1px rgba(255,255,255,0.4)",
    },
  },
  copper: {
    wrapper: "relative inline-flex rounded-xl p-[1px]",
    wrapperStyle: {
      background: "linear-gradient(145deg, #da8a67, #8b4513, #cd7f32)",
    },
    inner: "absolute inset-[1px] rounded-[11px]",
    innerStyle: {
      background: "linear-gradient(145deg, #b87333, #6b3a1f, #a0522d)",
    },
    button:
      "relative z-10 inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-orange-950 transition-all duration-200",
    buttonStyle: {
      background: "linear-gradient(145deg, #e8a87c 0%, #b87333 50%, #d4956b 100%)",
      textShadow: "0 1px 1px rgba(255,255,255,0.3)",
    },
  },
  dark: {
    wrapper: "relative inline-flex rounded-xl p-[1px]",
    wrapperStyle: {
      background: "linear-gradient(145deg, #555, #222, #444)",
    },
    inner: "absolute inset-[1px] rounded-[11px]",
    innerStyle: {
      background: "linear-gradient(145deg, #333, #111, #2a2a2a)",
    },
    button:
      "relative z-10 inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-zinc-200 transition-all duration-200",
    buttonStyle: {
      background: "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 50%, #2d2d2d 100%)",
      textShadow: "0 1px 2px rgba(0,0,0,0.8)",
    },
  },
}

const metalSizes = {
  sm: "h-8 px-4 text-xs",
  md: "h-10 px-6 text-sm",
  lg: "h-12 px-8 text-base",
}

const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  (
    { className, variant = "dark", size = "md", children, ...props },
    ref
  ) => {
    const [isPressed, setIsPressed] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)
    const [isTouchDevice] = React.useState(false)

    const variants = metalVariants[variant]
    const buttonText = children

    const handleInternalMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(true)
      props.onMouseDown?.(e)
    }

    const handleInternalMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(false)
      props.onMouseUp?.(e)
    }

    const handleInternalMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false)
      setIsPressed(false)
      props.onMouseLeave?.(e)
    }

    const handleInternalMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true)
      props.onMouseEnter?.(e)
    }

    const handleInternalTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
      setIsPressed(true)
      props.onTouchStart?.(e)
    }

    const handleInternalTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
      setIsPressed(false)
      props.onTouchEnd?.(e)
    }

    const handleInternalTouchCancel = (e: React.TouchEvent<HTMLButtonElement>) => {
      setIsPressed(false)
      props.onTouchCancel?.(e)
    }

    return (
      <div className={variants.wrapper} style={variants.wrapperStyle}>
        <div className={variants.inner} style={variants.innerStyle}></div>
        <button
          ref={ref}
          className={cn(variants.button, metalSizes[size], className)}
          style={{
            ...variants.buttonStyle,
            transform: isPressed ? "scale(0.97)" : "scale(1)",
            boxShadow: isPressed
              ? "inset 0 2px 4px rgba(0,0,0,0.3)"
              : isHovered
              ? "0 4px 15px rgba(0,0,0,0.3), inset 0 -1px 2px rgba(0,0,0,0.1)"
              : "0 2px 8px rgba(0,0,0,0.2), inset 0 -1px 2px rgba(0,0,0,0.1)",
            transition: "all 0.15s ease",
          }}
          {...props}
          onMouseDown={handleInternalMouseDown}
          onMouseUp={handleInternalMouseUp}
          onMouseLeave={handleInternalMouseLeave}
          onMouseEnter={handleInternalMouseEnter}
          onTouchStart={handleInternalTouchStart}
          onTouchEnd={handleInternalTouchEnd}
          onTouchCancel={handleInternalTouchCancel}
        >
          <ShineEffect isPressed={isPressed} />
          {buttonText}
          {isHovered && !isPressed && !isTouchDevice && (
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-transparent to-white/5" />
          )}
        </button>
      </div>
    )
  }
)
MetalButton.displayName = "MetalButton"

/* ─── Liquid Glass Button ─── */
export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "glow"
  size?: "sm" | "md" | "lg"
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [isPressed, setIsPressed] = React.useState(false)
    const [ripple, setRipple] = React.useState<{ x: number; y: number } | null>(null)

    const sizeClasses = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-13 px-10 text-base",
    }

    const variantStyles = {
      default: {
        background: isPressed
          ? "linear-gradient(135deg, rgba(99,102,241,0.95) 0%, rgba(139,92,246,0.95) 100%)"
          : isHovered
          ? "linear-gradient(135deg, rgba(99,102,241,0.85) 0%, rgba(139,92,246,0.85) 100%)"
          : "linear-gradient(135deg, rgba(99,102,241,0.7) 0%, rgba(139,92,246,0.7) 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 4px 16px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
      },
      outline: {
        background: isPressed
          ? "rgba(255,255,255,0.12)"
          : isHovered
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
          : "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      glow: {
        background: isPressed
          ? "linear-gradient(135deg, rgba(34,211,238,0.95) 0%, rgba(99,102,241,0.95) 100%)"
          : isHovered
          ? "linear-gradient(135deg, rgba(34,211,238,0.85) 0%, rgba(99,102,241,0.85) 100%)"
          : "linear-gradient(135deg, rgba(34,211,238,0.7) 0%, rgba(99,102,241,0.7) 100%)",
        border: "1px solid rgba(34,211,238,0.3)",
        boxShadow: isHovered
          ? "0 8px 32px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.15), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 4px 16px rgba(34,211,238,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
      },
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setTimeout(() => setRipple(null), 600)
      props.onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-medium text-white cursor-pointer whitespace-nowrap transition-all duration-300 ease-out",
          "backdrop-blur-xl",
          sizeClasses[size],
          className
        )}
        style={{
          ...variantStyles[variant],
          transform: isPressed ? "scale(0.97)" : isHovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsPressed(false) }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={handleClick}
        {...props}
      >
        {/* Glass reflection */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Animated shine */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background:
                "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent, transparent)",
              animation: isHovered ? "liquid-spin 4s linear infinite" : "none",
            }}
          />
        </div>

        {/* Ripple */}
        {ripple && (
          <span
            className="absolute rounded-full"
            style={{
              left: ripple.x - 5,
              top: ripple.y - 5,
              width: 10,
              height: 10,
              background: "rgba(255,255,255,0.4)",
              animation: "ripple-expand 0.6s ease-out forwards",
            }}
          />
        )}

        <span className="relative z-10">{children}</span>
      </button>
    )
  }
)
LiquidButton.displayName = "LiquidButton"

export { Button, buttonVariants, MetalButton, LiquidButton }
