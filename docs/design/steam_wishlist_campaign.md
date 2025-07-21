# Steam Wishlist Campaign Page Design

## Overview
A marketing campaign page where users can get their face added to "City Defense Z" as a zombie character. Users must add the game to their Steam wishlist and upload their face photo to participate in this unique promotional opportunity.

## User Flow

### 1. Landing State
- **Page Title**: "Become a Zombie in City Defense Z!"
- **Hero Section**: 
  - Main headline: "Get Your Face in the Game as a Zombie!"
  - Subheadline: "Add City Defense Z to your Steam wishlist and upload your photo for a chance to become a zombie character in our game!"
  - Features: Preview images of zombie characters, campaign benefits
- **Primary CTA**: "Sign in with Steam to Start" button
- **Steam branding**: Official Steam login styling

### 2. Steam Authentication
- **Steam OpenID Integration**: Use Steam's OpenID authentication
- **Redirect Flow**: User redirects to Steam → authenticates → returns with Steam64 ID
- **Loading State**: Show loading spinner during authentication process
- **Error Handling**: Handle failed authentication gracefully

### 3. Wishlist Verification
- **Data Collection**: Extract Steam64 ID from authentication
- **Wishlist Scraping**: Check `https://steamcommunity.com/profiles/{steam64id}/wishlist/?sort=dateadded`
- **Game Detection**: Search for "City Defense Z" in wishlist data
- **Loading State**: Show progress indicator during verification

### 4. Success State (Game in Wishlist)
- **Welcome Message**: "Welcome, {Steam Username}! Thank you for wishlisting City Defense Z!"
- **Campaign Form**: 
  - Headline: "Upload Your Face to Become a Zombie!"
  - Photo upload section (required) - "Upload your face photo (JPG, PNG, GIF)"
  - Email input (required) - "Email address for notifications"
  - Terms and conditions checkbox - "I agree to have my face used as a zombie character in City Defense Z"
  - Submit button: "Submit My Zombie Face!"
- **Steam Profile Display**: Show user's Steam avatar and username
- **Additional Info**: Campaign details, timeline, selection process

### 5. Failure State (Game Not in Wishlist)
- **Modal Popup**: 
  - Title: "Wishlist Required to Become a Zombie!"
  - Message: "To get your face in City Defense Z as a zombie, you must first add our game to your Steam wishlist. Don't worry - it's free and helps support our game development!"
  - Primary Button: "Add to Steam Wishlist" (opens Steam store page)
  - Secondary Button: "I've Added It - Check Again" (re-verify wishlist)
  - Close button to return to landing

## Technical Requirements

### Steam Authentication
- **OpenID Implementation**: Use Steam's OpenID 2.0 authentication
- **Steam64 ID Extraction**: Parse authentication response for Steam64 ID
- **Session Management**: Store authenticated state securely

### Wishlist Scraping (Google Cloud Platform)
- **GCP Cloud Functions**: Serverless function to scrape Steam wishlist data
- **CORS Handling**: Backend service eliminates CORS issues with Steam
- **Rate Limiting**: Implement intelligent rate limiting with Cloud Functions
- **Error Handling**: Handle private profiles, network errors, parsing failures
- **Cache Strategy**: Use Cloud Firestore or Cloud Storage for caching wishlist data
- **Proxy Rotation**: Optional proxy rotation for large-scale scraping
- **Monitoring**: Cloud Monitoring for tracking scraping performance and errors

### Form Functionality
- **Email Validation**: Validate email format and uniqueness
- **Photo Upload**: Support common image formats (JPG, PNG, GIF) - REQUIRED
- **Photo Requirements**: Clear face photo, good lighting, facing camera
- **File Size Limits**: Max 10MB per photo, minimum resolution requirements
- **Form Validation**: Client-side and server-side validation
- **Submission Tracking**: Store submission timestamp and Steam64 ID
- **Anti-spam**: Prevent multiple submissions from same Steam account

## UI/UX Design

### Color Scheme
- **Primary**: Steam blue (#1b2838)
- **Secondary**: Steam green (#90ba3c)
- **Accent**: Orange (#ff6b35)
- **Background**: Dark theme matching Steam aesthetic

### Typography
- **Headers**: Bold, modern sans-serif
- **Body**: Clean, readable font
- **Steam Button**: Official Steam font styling

### Layout
- **Responsive Design**: Mobile-first approach
- **Grid System**: Consistent spacing and alignment
- **Loading States**: Smooth transitions and feedback
- **Error States**: Clear, actionable error messages

## Components Needed

### SteamLoginButton
- Official Steam styling
- Loading state
- Error handling
- Accessibility features

### WishlistChecker
- Progress indicator
- Success/failure states
- Retry functionality

### CampaignForm
- Email input with validation
- Photo upload with preview
- Submit functionality
- Form state management

### WishlistModal
- Responsive modal
- Call-to-action buttons
- Close functionality
- Overlay handling

## Security Considerations
- **CSRF Protection**: Implement CSRF tokens
- **Input Sanitization**: Sanitize all user inputs
- **File Upload Security**: Validate file types and scan for malware
- **Rate Limiting**: Prevent abuse of wishlist checking
- **Privacy**: Handle user data according to privacy policies

## Analytics & Tracking
- **Conversion Tracking**: Track sign-in → wishlist check → form submission
- **Error Tracking**: Monitor authentication and API failures
- **Performance Monitoring**: Track page load times and API response times

## Testing Strategy
- **Unit Tests**: Test individual components
- **Integration Tests**: Test Steam authentication flow
- **E2E Tests**: Test complete user journey
- **Error Scenarios**: Test all failure states
- **Performance Tests**: Test under load

## Development Approach

### Local Development First
1. **Mock Backend**: Create local Node.js/Express server for testing
2. **Frontend Structure**: Build components that work with both local and cloud APIs
3. **Environment Configuration**: Use environment variables for API endpoints
4. **Testing**: Validate complete user flow locally before cloud deployment

### Local Backend Setup
```javascript
// Local Express server for development
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock Steam authentication endpoint
app.post('/auth/steam', (req, res) => {
  // Mock Steam OpenID response
  const mockSteam64 = '76561198036604780';
  res.json({ steam64id: mockSteam64, username: 'TestUser' });
});

// Mock wishlist checking endpoint
app.post('/check-wishlist', async (req, res) => {
  const { steam64id } = req.body;
  
  // Mock wishlist scraping logic
  const hasGameInWishlist = Math.random() > 0.5; // Random for testing
  
  res.json({ 
    hasGame: hasGameInWishlist, 
    gameName: 'City Defense Z',
    steam64id 
  });
});

// Mock campaign submission endpoint
app.post('/submit-zombie-face', async (req, res) => {
  const { steam64id, email, photo } = req.body;
  
  // Mock submission processing
  res.json({ 
    success: true, 
    message: 'Your zombie face has been submitted successfully!',
    submissionId: `zombie_${Date.now()}`,
    steam64id,
    email 
  });
});

app.listen(3000, () => {
  console.log('Local backend running on port 3000');
});
```

## Google Cloud Platform Implementation (Future Deployment)

### Cloud Functions Setup
```javascript
// Example Cloud Function for Steam wishlist scraping
exports.checkWishlist = functions.https.onRequest(async (req, res) => {
  const { steam64id } = req.body;
  
  // Scrape Steam wishlist
  const wishlistUrl = `https://steamcommunity.com/profiles/${steam64id}/wishlist/?sort=dateadded`;
  
  // Check for City Defense Z
  // Return result to frontend
});
```

### Services Needed
- **Cloud Functions**: Serverless wishlist scraping
- **Cloud Firestore**: Cache wishlist data and store user submissions
- **Cloud Storage**: Store uploaded photos
- **Cloud Run**: Optional for more complex backend logic
- **Identity and Access Management (IAM)**: Secure API endpoints

### Deployment Architecture
```
Frontend (GitHub Pages/Netlify) 
    ↓ HTTPS requests
Cloud Functions (Wishlist Scraper)
    ↓ Cache/Store data
Cloud Firestore (User Data)
    ↓ Store files
Cloud Storage (Photo Uploads)
```

### Environment Variables
- `STEAM_API_KEY`: Steam Web API key (if using official API)
- `GAME_ID`: City Defense Z Steam app ID
- `RATE_LIMIT_REQUESTS`: Max requests per minute
- `CACHE_DURATION`: How long to cache wishlist data

### Cost Estimation
- **Cloud Functions**: ~$0.40 per 1M requests
- **Cloud Firestore**: ~$0.18 per 100K reads
- **Cloud Storage**: ~$0.02 per GB/month
- **Bandwidth**: ~$0.12 per GB

## Future Enhancements
- **Photo Gallery**: Showcase selected zombie faces (with permission)
- **Social Sharing**: Allow users to share campaign participation
- **Submission Counter**: Show how many faces have been submitted
- **Notification System**: Email confirmations and selection notifications
- **Multiple Campaigns**: Support different character types (not just zombies)
- **Face Preview**: Show how user's face might look as a zombie before submission 