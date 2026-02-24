---
layout: post
title: "OpenClaw is now controlling my robot"
date: 2026-02-24
tags: [Robotics, ROS2, Edge AI, Agents, Jetson, Computer Vision]
excerpt: "OpenClaw now controls my rover via ROS 2, turning high-level goals into real hardware actions with on-device perception and speech."
---

Robots have always felt “autonomous,” but the reality is that most of them still follow a rigid script. We hard-code behaviors, trigger them with sensors, and call it autonomy. The robot executes; it does not decide.

That is why this project feels like a real step forward: **OpenClaw is now controlling my rover via ROS 2**. It is not just running a pre-planned sequence. It can take a high-level goal, break it into tasks, interact with hardware, and respond to what it sees.

This might be the first time I have seen a true **edge-deployed agent** act like a decision-maker instead of a macro.

---

## What is different about this approach

Traditionally, “robot autonomy” looks like this:

- You write the behaviors.
- You wire them to sensors and inputs.
- The robot executes exactly what you anticipated.

With OpenClaw on-device, the flow becomes:

- Define a high-level objective.
- The agent decomposes it into subtasks.
- It controls motors, reads sensors, and uses perception tools to act.

This is not a toy demo. It is a real integration with ROS2 nodes and real hardware.

---

## The robot and stack

- **Platform:** Waveshare UGV rover
- **Compute:** Jetson Orin Nano
- **Middleware:** ROS 2 Humble
- **Control Layer:** OpenClaw agent + custom skills

OpenClaw interacts with the rover purely through ROS2 topics and services. That keeps the integration standard and portable.

---

## The three skills powering it

### 1) Hardware control via ROS 2
The agent sends commands directly on ROS 2 topics. That includes:

- Drive commands (`/openclaw/cmd_vel` → `/cmd_vel`)
- Gimbal commands (`/openclaw/gimbal` → `/ugv/joint_states`)
- Light control (`/openclaw/lights` → `/ugv/led_ctrl`)
- Camera capture (`/openclaw/capture` service)

This keeps everything aligned with normal ROS 2 tooling.

### 2) Vision and understanding
The robot captures images from `/image_raw`.
Then an image analysis skill sends those captures to Gemini CLI for interpretation.

That means the agent can answer questions like:
- “What objects are visible?”
- “Where is X in the frame?”
- “Is the path clear?”

### 3) Speech (TTS) on the robot
A text-to-speech skill generates audio and plays it directly on the robot using `ffplay`. This makes the agent tangible and interactive.

---

## Why this matters

We have talked about “AI agents” and “robot autonomy” for years, but most of the time that means cloud inference and brittle scripts.

This approach is different:

- It runs **on the edge**
- It uses **standard ROS2 interfaces**
- It allows **goal-driven behavior**
- It is **extensible** with new skills

Instead of just “control software,” the robot starts acting like a teammate.

---

## Demo: what I show in the video

In the demo, I show OpenClaw:

- Starting up and orienting the gimbal
- Moving the rover based on a goal
- Capturing and understanding images
- Responding verbally with status updates

It is not just a scripted path — the agent actively chooses steps and handles the hardware directly.

---

## What is next

My next video will show a more complex mission where multi-step reasoning and actions are required (think: inspect → reposition → verify → report).

I am also preparing a **generic ROS2 skill for OpenClaw** so others can integrate their robots quickly. I will share it soon.

---

## Final thoughts

This is the most “alive” I have seen a robot feel.
Not because it moves, but because it **decides**.

If you are building in robotics, autonomy, or edge AI, I would love to compare notes.
