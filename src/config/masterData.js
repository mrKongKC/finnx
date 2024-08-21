
import locale from '@/config/locale.json'

import leaveApprovalIcon from '@/assets/img/approval-leave-icon.svg';
import departmentIcon from '@/assets/img/department-icon.svg';
import leaveDayIcon from '@/assets/img/leave-day-icon.svg';
import manageIcon from '@/assets/img/manage-icon.svg';
import scheduleIcon from '@/assets/img/schedule-icon.svg';
import calendarIcon from '@/assets/img/calendar.svg';
import carouselFsStep from "@/assets/img/step-leave1.png";
import carouselScStep from "@/assets/img/step-leave2.png";
import carouselTdStep from "@/assets/img/step-leave3.png";
import carouselFsIcon from "@/assets/img/small-notice-leave.svg";
import carouselScIcon from "@/assets/img/small-approve.svg";
import carouselTdIcon from "@/assets/img/small-vacation.svg";

export const headerRouter = [
    { title: locale.header.home, path: '/' },
    { title: locale.header.price, path: '/price' },
    { title: locale.header.article, path: '/article' },
    { title: locale.header.contact, path: '/contact' }
]

export const hrContent = [
    { title: locale.human_resource.benefits.line_notice, icon: leaveApprovalIcon },
    { title: locale.human_resource.benefits.approval_leave, icon: leaveDayIcon },
    { title: locale.human_resource.benefits.department, icon: departmentIcon },
    { title: locale.human_resource.benefits.team_member, icon: manageIcon },
    { title: locale.human_resource.benefits.schedule, icon: scheduleIcon }
]

export const leaveRequest = [
    { title: locale.human_resource.leve_request.notice, icon: leaveApprovalIcon },
    { title: locale.human_resource.leve_request.approve, icon: leaveDayIcon },
    { title: locale.human_resource.leve_request.assign, icon: calendarIcon },
]

export const carouselSteps = [
    { title: locale.human_resource.carousel_steps.notice, image: carouselFsStep, iconStep: carouselFsIcon },
    { title: locale.human_resource.carousel_steps.approve, image: carouselScStep, iconStep: carouselScIcon },
    { title: locale.human_resource.carousel_steps.vacation, image: carouselTdStep, iconStep: carouselTdIcon },
]