## Custome api response and error handling
Custom error handling is a technique used to manage errors consistently and effectively throughout an application. It ensures that errors are caught, handled, and addressed in a structured way, preventing them from affecting the user experience or causing unexpected behavior.

### Benefits of Custom Error Handling

1. **Catches all errors (local and global)**: Ensures that all types of errors, whether local or global, are caught and handled in one place.
   
2. **Prevents errors from leaking**: Stops errors from propagating and affecting other parts of the system or leaking to users.
   
3. **Reusability**: Write error-handling logic once and reuse it across different parts of the application.
   
4. **Clean and avoids duplication**: Centralizes error handling, reducing repetitive error-checking code and keeping the codebase clean and maintainable.

### Why is Custom Error Handling Important?

- **Consistency**: Provides a consistent approach to handle errors across the application.
- **Efficiency**: Saves time by streamlining how errors are managed.
- **Reliability**: Ensures your app is robust and resilient to issues, preventing unexpected crashes and bugs.


### UTILS FOLDER 📁

#### 1. Create asyncHandler.js
