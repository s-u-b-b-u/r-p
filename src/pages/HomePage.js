import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from '@mui/material';
import {
  Event as EventIcon,
  Group as GroupIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Notifications as NotificationsIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const HomePage = () => {
  // Sample data
  const quickStats = [
    { title: 'Upcoming Events', value: '5', icon: <EventIcon />, color: '#1976d2' },
    { title: 'New Alumni', value: '23', icon: <GroupIcon />, color: '#2e7d32' },
    { title: 'Job Postings', value: '12', icon: <WorkIcon />, color: '#ed6c02' },
    { title: 'Mentors Available', value: '8', icon: <SchoolIcon />, color: '#9c27b0' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Annual Alumni Meet', date: 'Jan 15, 2024', type: 'Networking' },
    { id: 2, title: 'Career Guidance Workshop', date: 'Jan 20, 2024', type: 'Workshop' },
    { id: 3, title: 'Tech Talk: AI in Industry', date: 'Jan 25, 2024', type: 'Seminar' }
  ];

  const quickActions = [
    { label: 'Update Profile', icon: '📝', color: 'primary' },
    { label: 'Find Alumni', icon: '🔍', color: 'secondary' },
    { label: 'Browse Jobs', icon: '💼', color: 'success' },
    { label: 'Find Mentor', icon: '🎓', color: 'info' }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Welcome Section */}
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          borderRadius: 3,
          p: 4,
          mb: 4,
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Welcome back, Student! 👋
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Here's what's happening in your alumni network today.
        </Typography>
      </Paper>

      {/* Quick Stats */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          Quick Overview
        </Typography>
        <Grid container spacing={3}>
          {quickStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                elevation={2}
                sx={{ 
                  borderTop: `4px solid ${stat.color}`,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ color: stat.color, fontSize: '2rem' }}>
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography variant="h4" component="div" fontWeight="bold">
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.title}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* Upcoming Events */}
        <Grid item xs={12} md={8}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Upcoming Events
                </Typography>
                <Button endIcon={<ArrowForwardIcon />} color="primary">
                  View All
                </Button>
              </Box>
              
              <List>
                {upcomingEvents.map((event) => (
                  <ListItem
                    key={event.id}
                    sx={{
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                  >
                    <ListItemIcon>
                      <EventIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={event.title}
                      secondary={event.date}
                    />
                    <Chip 
                      label={event.type} 
                      size="small" 
                      color="primary" 
                      variant="outlined"
                    />
                    <Button variant="contained" size="small" sx={{ ml: 2 }}>
                      Register
                    </Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                {quickActions.map((action, index) => (
                  <Grid item xs={6} key={index}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        height: 80,
                        flexDirection: 'column',
                        gap: 1,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2
                        }
                      }}
                      color={action.color}
                    >
                      <Typography variant="h5">{action.icon}</Typography>
                      <Typography variant="body2" fontWeight="medium">
                        {action.label}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card elevation={2} sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                Recent Activities
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsIcon color="info" />
                  </ListItemIcon>
                  <ListItemText
                    primary="John Doe updated his profile"
                    secondary="2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="New job posting from Google"
                    secondary="5 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsIcon color="warning" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Alumni donation drive started"
                    secondary="1 day ago"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;