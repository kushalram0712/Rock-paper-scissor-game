# Rock Paper Scissors Game

A modular, terminal-based implementation of the classic **Rock–Paper–Scissors** game built in Python.  
This project focuses on clean architecture, robust input validation, and an intuitive command-line user experience.

---

## Features

- Clean and modular code structure
- Interactive command-line gameplay
- Randomized computer opponent
- Strong input validation and error handling
- Replay support for continuous gameplay
- Beginner-friendly project architecture
- Lightweight and dependency-free

---

## Project Structure

```text
Rock-paper-scissor-game/
│
├── main.py              # Entry point of the application
├── game_logic.py        # Core gameplay rules and winner logic
├── input_handler.py     # User input validation and sanitization
├── utils.py             # Helper functions
├── README.md            # Project documentation
└── ...
```

> The exact structure may vary depending on implementation updates.

---

## How the Game Works

The player chooses one of the following moves:

- Rock
- Paper
- Scissors

The computer randomly selects a move, and the winner is determined using the classic rules:

| Player Move | Opponent Move | Result |
|---|---|---|
| Rock | Scissors | Win |
| Paper | Rock | Win |
| Scissors | Paper | Win |

---

## Installation

### Prerequisites

- Python 3.8 or higher

### Clone the Repository

```bash
git clone https://github.com/kushalram0712/Rock-paper-scissor-game.git
```

### Navigate to the Project Directory

```bash
cd Rock-paper-scissor-game
```

---

## Running the Application

```bash
python main.py
```

Depending on your environment, you may also use:

```bash
python3 main.py
```

---

## Example Gameplay

```text
Welcome to Rock Paper Scissors!

Choose:
1. Rock
2. Paper
3. Scissors

Your choice: Rock
Computer chose: Scissors

You win!
```

---

## Technical Highlights

### Modular Design
The project separates:
- game logic,
- input handling,
- utility functions,
- and application flow.

This improves:
- readability,
- maintainability,
- scalability,
- and testing capability.

---

### Input Validation
The application is designed to handle:
- invalid inputs,
- empty responses,
- unexpected characters,
- and formatting inconsistencies.

---

## Future Improvements

Planned enhancements may include:

- Score tracking system
- Difficulty levels
- Best-of-three mode
- AI-based opponent logic
- Graphical user interface (GUI)
- Unit testing with `pytest`
- Multiplayer support

---

## Learning Objectives

This project demonstrates practical understanding of:

- Python fundamentals
- Conditional logic
- Functions and modular programming
- Loops and control flow
- Error handling
- CLI application development

---

## Contributing

Contributions are welcome.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## License

This project is open source and available under the MIT License.

---

## Author

Developed by [BEZAWADA KUSHAL RAM](https://github.com/kushalram0712)

---

## Repository

[GitHub Repository](https://github.com/kushalram0712/Rock-paper-scissor-game)
