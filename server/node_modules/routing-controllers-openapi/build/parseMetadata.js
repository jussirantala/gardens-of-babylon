"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRoutes = void 0;
function parseRoutes(storage, options = {}) {
    return storage.actions.map((action) => ({
        action,
        controller: storage.controllers.find((c) => c.target === action.target),
        options,
        params: storage
            .filterParamsWithTargetAndMethod(action.target, action.method)
            .sort((a, b) => a.index - b.index),
        responseHandlers: storage.filterResponseHandlersWithTargetAndMethod(action.target, action.method),
    }));
}
exports.parseRoutes = parseRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VNZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZU1ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXdCQSxTQUFnQixXQUFXLENBQ3pCLE9BQTRCLEVBQzVCLFVBQXFDLEVBQUU7SUFFdkMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNO1FBQ04sVUFBVSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNsQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxDQUNSO1FBQzNCLE9BQU87UUFDUCxNQUFNLEVBQUUsT0FBTzthQUNaLCtCQUErQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUM3RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDcEMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLHlDQUF5QyxDQUNqRSxNQUFNLENBQUMsTUFBTSxFQUNiLE1BQU0sQ0FBQyxNQUFNLENBQ2Q7S0FDRixDQUFDLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFsQkQsa0NBa0JDIn0=